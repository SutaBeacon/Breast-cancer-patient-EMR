import {chemotherapyduration,patientage,tumourproperty} from '../data/metedata';
var drawpie = function(string){
    var pie = d3.pie();
    var width = 300;
    var height =300;
    var outerRadius =width/2;
    var innerRadius = width/4;
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width",width)
        .attr("height",height);
    var pievalue =[];
    var piekey = [];
    var relevance;
    if(string == "化疗时长"){
        relevance = chemotherapyduration.reduce(function(allElements,ele){
        if(ele in allElements){
            allElements[ele]++;
        }else{
            allElements[ele] = 1;
        }
        return allElements;
        },{});
        console.log(relevance);
        
    }else if(string == "肿瘤性质"){
        relevance = tumourproperty.reduce(function(allElements,ele){
        if(ele in allElements){
            allElements[ele]++;
        }else{
            allElements[ele] = 1;
        }
        return allElements;
        },{});
        console.log(relevance);
    }else if(string == "年龄"){
        relevance = patientage.reduce(function(allElements,ele){
        if(ele in allElements){
            allElements[ele]++;
        }else{
            allElements[ele] = 1;
        }
        return allElements;
        },{});
        console.log(relevance);
    }
    for(var key in relevance){
        piekey.push(key);
        pievalue.push(relevance[key]);
    }
    console.log(piekey);
    console.log(pievalue);
    var arcs = svg.selectAll("g.arc")
    .data(pie(pievalue))
    .enter()
    .append("g")
    .attr("class","src")
    .attr("transform","translate("+outerRadius+","+outerRadius+")"); 
    var currentcolor;
    arcs.append("path")
        .attr("fill",function(d,i){
            return color(i);
        })
        .attr("d",arc)
        .on("mouseover",function(d){
            currentcolor = d3.select(this).attr("fill");
            d3.select(this)
              .attr("fill","black");
            // arcs.append("text")
            //   .attr("id","tooltip")
            //   .attr("transform",function(d){
            //       return "translate("+arc.centroid(d)+")";
            //   })
            //   .attr("text-anchor","middle")
            //   .attr("font-family","sans-serif")
            //   .attr("font-size","11px")
            //   .attr("fill","black")
            //   .text(d.value);
            // console.log(d.value);
            var e = event || window.event;
            if(string == "化疗时长"){
                d3.select("#tooltip")
                    .style("left",e.clientX-800+"px")
                    .style("top",e.clientY-500+"px")
                    .select("#valuechemotherapy")
                    .text(d.value);
                    console.log(d.value);
                d3.select("#namechemotherapy").classed("hidden",false);
            }else if(string == "年龄"){
                d3.select("#tooltip")
                    .style("left",e.clientX-800+"px")
                    .style("top",e.clientY-500+"px")
                    .select("#valueage")
                    .text(d.value);
                d3.select("#nameage").classed("hidden",false);
            }else if(string == "肿瘤性质"){
                d3.select("#tooltip")
                .style("left",e.clientX-800+"px")
                .style("top",e.clientY-500+"px")
                .select("#valueproperty")
                .text(d.value);
                d3.select("#nameproperty").classed("hidden",false);
            }
          d3.select("#tooltip").classed("hidden",false);
          })
        .on("mouseout",function(){
            d3.select(this)
              .attr("fill",currentcolor);
            arcs.select("#tooltip").remove();
            d3.select("#tooltip").classed("hidden",true);
            d3.select("#namechemotherapy").classed("hidden",true);
            d3.select("#nameage").classed("hidden",true);
            d3.select("#nameproperty").classed("hidden",true);
            var spannode = document.getElementsByTagName("span");
            for(var i=0;i<spannode.length;i++){
            spannode[i].innerText="";
          }
          });
}
export {drawpie};