import {dataset} from '../data/metedata';
    var drawtidytree = function(){
        var entries = d3.nest()
        .key(function(d){return d["性别"]})
        .key(function(d){return d["病史"]})
        .key(function(d){return d["肿瘤性质"]})
        .key(function(d){return d["是否转移"]})
        .key(function(d){return d["初检分型"]})
        .key(function(d){return d["自检表征"]})
        .key(function(d){return d["触检表征"]})
        .key(function(d){return d["化疗用药"]})
        .key(function(d){return d["不良反应"]})
        .rollup(function(leaves){return leaves.length;})
        .entries(dataset);
    // console.log(entries);
    var dataobj = new Object();
    dataobj.key = "patient";
    dataobj.values = new Array();
    dataobj.values = entries;
    // console.log(dataobj);
    var json = JSON.parse(JSON.stringify(dataobj).replace(/key/g,"name"));
    var json2 = JSON.parse(JSON.stringify(json).replace(/values/g,"children"));
    // console.log(json2);
    // console.log(d3.hierarchy(json2));
    var width = 500;
    function tree(data){
        // console.log(d3.hierarchy(data));
        var root = d3.hierarchy(data);
        // console.log(root);
        root.dx = 1;
        root.dy = width/(root.height+1);
        // console.log(d3.tree().nodeSize([root.dx,root.dy])(root));
        return d3.tree().nodeSize([root.dx,root.dy])(root);
    }
    const root = tree(json2);
    // console.log(root);
    let x0 = Infinity;
    let x1 = -x0;
    root.each(d=>{
        if(d.x>x1)x1=d.x;
        if(d.x<x0)x0=d.x;
    })
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width",width)
        .attr("height",500)
        .attr("overflow","visible");
    var g = svg.append("g")
        .attr("font-family","sans-serif")
        .attr("font-size",10)
        .attr("transform",`translate(${root.dy/3},${root.dx-x0})`);
    var link = g.append("g")
        .attr("fill","none")
        .attr("stroke","#555")
        .attr("stroke-opacity",0.4)
        .attr("stroke-width",1.5)
        .selectAll("path")
        .data(root.links())
        .enter().append("path")
        .attr("d",d3.linkHorizontal()
            .x(d=>d.y)
            .y(d=>d.x));
    const node = g.append("g")
        .attr("stroken-linejoin","round")
        .attr("stroke-width",3)
        .selectAll("g")
        .data(root.descendants().reverse())
        .enter().append("g")
        .attr("transform",d=>`translate(${d.y},${d.x})`);
    node.append("circle")
        .attr("fill",d => d.children?"#555":"#999")
        .attr("r",2.5);
    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children? -6 : 6)
        .attr("text-anchor", d => d.children? "end" : "start")
        .text(function(d){
            // console.log(d);
            return d.data.name;
        })
        .clone(true).lower()
        .attr("stroke", "white");
}
export {drawtidytree};