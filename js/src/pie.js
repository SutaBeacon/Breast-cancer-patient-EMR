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
    var piedata = [];
    if(string == "化疗时长"){
        piedata = countnum(chemotherapyduration);
        // var sum=0;
        // for(var i=0;i<piedata.length;i++){
        //     sum += piedata[i]["value"];
        // }
        // console.log(sum);
    }else if(string == "肿瘤性质"){
        piedata = countnum(tumourproperty);
    }else if(string == "年龄"){
        piedata = countnum(patientage);
    }
    var arcs = svg.selectAll("g.arc")
    .data(pie.value(function(d){return d.value;})(piedata))
    .enter()
    .append("g")
    .attr("class","src")
    .attr("transform","translate("+outerRadius+","+outerRadius+")"); 
    console.log(arcs);
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
                    .text(d.data["key"]+",  "+toPercent(d.value/chemotherapyduration.length));
                d3.select("#namechemotherapy").classed("hidden",false);
            }else if(string == "年龄"){
                d3.select("#tooltip")
                    .style("left",e.clientX-800+"px")
                    .style("top",e.clientY-500+"px")
                    .select("#valueage")
                    .text(d.data["key"]+",  "+toPercent(d.value/patientage.length));
                d3.select("#nameage").classed("hidden",false);
            }else if(string == "肿瘤性质"){
                d3.select("#tooltip")
                .style("left",e.clientX-800+"px")
                .style("top",e.clientY-500+"px")
                .select("#valueproperty")
                .text(d.data["key"]+",  "+toPercent(d.value/tumourproperty.length));
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
function countnum(arr){
    var objarr = [];
    for(var i=0;i<arr.length;i++){
        if(JSON.stringify(objarr).indexOf(arr[i]) == -1){
            var obj = new Object();
            obj.key = arr[i];
            obj.value = 1;
            objarr.push(obj);
        }else {
            for(var j=0;j<objarr.length;j++){
                if(objarr[j]["key"] == arr[i]){
                    objarr[j]["value"]++;
                }
            }
        }
    }
    return objarr;
}
function toPercent(point){
    var str = Number(point*100).toFixed(2);
    str += "%";
    return str;
}
export {drawpie};