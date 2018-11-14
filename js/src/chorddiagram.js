import {tumourid,tumourarea,tumourgirth,chemotherapyduration,
    tumourevenness,sunkencount,symmetry,patientage,tumourradius,
    tumoursunken,tumourdensity,tumourtexture} from '../data/metedata';
import math from '../math';
 var drawchord = function(){
    var width = 500;
    var height = 500;
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width",width)
        .attr("height",height)
        .attr("viewBox",[-width/2,-height/2,width,height])
        .attr("font-size",10)
        .attr("font-family","sans-serif");
    var temp = [];
    temp.push(tumourid);
    temp.push(patientage);
    temp.push(tumourradius);
    temp.push(tumourtexture);
    temp.push(tumourevenness);
    temp.push(tumourgirth);
    temp.push(tumourarea);
    temp.push(tumourdensity);
    temp.push(tumoursunken);
    temp.push(sunkencount);
    temp.push(symmetry);
    temp.push(chemotherapyduration);
    var variablesname = ["ID编号","年龄","肿瘤半径",
        "肿瘤质地","肿瘤平滑度","肿瘤周长","肿瘤面积",
        "肿瘤致密度","肿瘤凹陷度","凹陷点数","对称性","化疗时长"];
    //console.log(temp);
    var pccs = new Array();
    for(var i =0;i<temp.length;i++){
        pccs[i] = new Array();
        for (var j = 0;j<temp.length;j++){
            // console.log(temp[i]);
            // console.log(temp[j]);
            pccs[i][j] = math.calculate(temp[i],temp[j]);
        }
    }
     console.log(pccs);
    function groupTicks(d,step){
        var k = (d.endAngle - d.startAngle)/d.value;
        return d3.range(0,d.value,step).map(value=>{
            return {value:value,angle:value*k+d.startAngle};
        });
    }
    var outerRadius = Math.min(width,height)*0.5-30;
    var innerRadius = outerRadius - 20;
    var s = d3.formatSpecifier("f");
    s.precision = d3.precisionFixed(0.1);
    var f = d3.format(s);
    var chord = d3.chord()
        .padAngle(0.05)
        .sortSubgroups(d3.descending);
    
    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    var ribbon = d3.ribbon()
        .radius(innerRadius);
    var color = d3.scaleOrdinal()
        .domain(d3.range(12))
        .range(d3.schemePaired);
    var chords = chord(pccs);
    console.log(chords);
    console.log(chords.groups);
    var group = svg.append("g")
        .selectAll("g")
        .data(chords.groups)
        .enter()
        .append("g");
    group.append("path")
        .attr("fill",d=>color(d.index))
        .attr("stroke",d=>d3.rgb(color(d.index)).darker())
        .attr("d",arc);
    group.append("text")
        .each(function(d,i){
             d.angle = (d.startAngle + d.endAngle)/2;
            d.name = variablesname[i];
        })
        .attr("dy",".35em")
        .attr("transform",function(d){
            return "rotate("+(d.angle*180/Math.PI)+")"+
            "translate(-10,"+ -1*(outerRadius-15)+")"+
            (((d.angle>Math.PI*3/4)&&(d.angle<Math.PI*5/4))?"rotate(180)":"");
        })
        .text(d=>d.name);
    var groupTick = group.append("g")
        .selectAll("g")
        .data(d=>groupTicks(d,0.5))
        .enter()
        .append("g")
        .attr("transform",d=>`rotate(${d.angle*180/Math.PI-90})translate(${outerRadius},0)`);
    groupTick.append("line")
        .attr("stroke","#000")
        .attr("x2",6);
    groupTick.filter(d=>f(d.value)%0.5===0)
        .append("text")
        .attr("x",8)
        .attr("dy",".35em")
        .attr("transform",d=>d.angle>Math.PI?"rotate(180)translate(-16)":null)
        .attr("text-anchor",d=>d.angle>Math.PI?"end":null)
        .text(d=>f(d.value));
    var currentcolor;
    svg.append("g")
        .attr("fill-opacity",0.67)
        .selectAll("path")
        .data(chords)
        .enter()
        .append("path")
        .attr("d",ribbon)
        .attr("fill",d=>color(d.target.index))
        .attr("stroke",d=>d3.rgb(color(d.target.index)).darker())
        .on("mouseover",function(d,i){
            currentcolor = d3.select(this).attr("fill");
            d3.select(this).attr("fill","black");
            // console.log(d.source.value);
            // console.log(d.source.index);
            // console.log(d.target.index);
            // console.log(variablesname[d.source.index]);
            // console.log(variablesname[d.target.index]);
            var e = event||window.event;
            d3.select("#tooltip")
                .style("left",e.clientX-800+"px")
                .style("top",e.clientY-500+"px")
                .select("#namepccs")
                .text("PCCS"+"("+variablesname[d.source.index]+"-"+variablesname[d.target.index]+")"+":  ");
            d3.select("#tooltip")
                .select("#valuepccs")
                .text(d.source.value);
            d3.select("#tooltip").classed("hidden",false);
        })
        .on("mouseout",function(d){
            d3.select(this).attr("fill",currentcolor);
            d3.select("#tooltip").classed("hidden",true);
            var spannode = document.getElementsByTagName("span");
            for(var i=0;i<spannode.length;i++){
            spannode[i].innerText="";
            }
        });
 } 
 export {drawchord};