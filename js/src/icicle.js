import {gender,medicalhistory,self_inspect_character,
    chujian_character,tumourproperty,w_transfer,initial_types,
    chemotherapymedicine,adverse_reaction,dataset} from '../data/metedata';

var drawicicle =  function(){
    var elementx =[];
    var textelementx = [];
    for(var i=0;i<10;i++){
        elementx[i] = document.getElementById(`xaxis_${i}`);
        if(elementx[i] != null){textelementx.push(elementx[i].innerText);}
    }
    console.log(textelementx);
    for(var i=0;i<textelementx.length;i++){
        eval(`var entries_${i}=d3.nest().key(function(d){return d[textelementx[${i}]]})`)
    }
    // var entries = d3.nest()
    //     .key(function(d){return d["性别"]})
        // .key(function(d){return d["病史"]})
        // .key(function(d){return d["肿瘤性质"]})
        // .key(function(d){return d["是否转移"]})
        // .key(function(d){return d["初检分型"]})
        // .key(function(d){return d["自检表征"]})
        // .key(function(d){return d["触检表征"]})
        // .key(function(d){return d["化疗用药"]})
        // .key(function(d){return d["不良反应"]})
      //  .rollup(function(leaves){return leaves.length;})
        // .entries(dataset);
    // var entries1  = entries.key(function(d){return d["病史"]});
    // var entries2  = entries1.key(function(d){return d["肿瘤性质"]}).entries(dataset);
    // console.log(entries2);
    /*
    var dataobj = new Object();
    dataobj.key = "patient";
    dataobj.values = new Array();
    dataobj.values = entries;
    // console.log(dataobj);
    var json = JSON.parse(JSON.stringify(dataobj).replace(/key/g,"name"));
    var json2 = JSON.parse(JSON.stringify(json).replace(/values/g,"children"));
    var height = 500;
    var width = 500;
    var partition = data=> 
        d3.partition()
        .size([height,width])
        .padding(1)
        (d3.hierarchy(data)
        .sum(d=>d.value)
        // .sort((a,b)=>b.height - a.height || b.value-a.value)
        );
    
    var color = d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow,dataobj.values.length+1))
    var format = d3.format(",d")
    var root = partition(json2);
    // console.log(d3.hierarchy(dataobj));
    // console.log(root);
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width",width)
        .attr("height",height)
        .attr("font-size","10")
        .attr("font-family","sans-serif");
    var cell = svg.selectAll("g")
        .data(root.descendants())
        .enter().append("g")
        .attr("transform",d=>`translate(${d.y0},${d.x0})`);
    cell.append("rect")
        .attr("width",d => d.y1-d.y0)
        .attr("height",d => d.x1-d.x0)
        .attr("fill-opacity",0.6)
        .attr("fill",d => {
            if(!d.depth)return "#ccc";
            while(d.depth>1)d=d.parent;
            return color(d.data.name);
        });
    var text = cell.filter(d =>(d.x1-d.x0)>16).append("text")
        .attr("x",4)
        .attr("y",13);
    text.append("tspan")
        .text(function(d){
            console.log(d);
            console.log(d.data)
            console.log(d.data.name)
            return d.data.name;
        });
    text.append("tspan")
        .attr("fill-opacity",0.7)
        .text(d=>`${format(d.value)}`);
    cell.append("title")
        .text(d=>`${d.ancestors().map(d=>d.data.name).reverse().join("/")}\n${format(d.value)}`);
    */
}
export {drawicicle};