import {gender,medicalhistory,self_inspect_character,
    chujian_character,w_transfer,initial_types,
    chemotherapymedicine,adverse_reaction,
    chemotherapyduration,patientage,tumourproperty} from '../data/metedata';
var drawpie = function(){
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
    var elementx = [];
    var elementy = [];
    var xstring;
    for(var i=0;i<11;i++){
        elementx[i] = document.getElementById(`xaxis_${i}`);
        elementy[i] = document.getElementById(`yaxis_${i}`);
        if(elementx[i] != null){
          xstring = elementx[i].innerText;
          break;
        }else if(elementy[i] != null){
          xstring = elementy[i].innerText;
          break;
        }
      }
    switch(xstring){
        case "性别":
            piedata = countnum(gender);
            break;
        case "病史":
            piedata = countnum(medicalhistory);
            break;
        case "自检表征":
            piedata = countnum(self_inspect_character);
            break;
        case "触检表征":
            piedata = countnum(chujian_character);
            break;
        case "肿瘤性质":
            piedata = countnum(tumourproperty);
            break;
        case "是否转移":
            piedata = countnum(w_transfer);
            break;
        case "初检分型":
            piedata = countnum(initial_types);
            break;
        case "化疗用药":
            piedata = countnum(chemotherapymedicine);
            break;
        case "不良反应":
            piedata = countnum(adverse_reaction);
            break;
        case "年龄":
            piedata = countnum(patientage);
            break;
        case "化疗时长":
            piedata = countnum(chemotherapyduration);
            break;
    }
    var arcs = svg.selectAll("g.arc")
    .data(pie.value(function(d){return d.value;})(piedata))
    .enter()
    .append("g")
    .attr("class","src")
    .attr("transform","translate("+outerRadius+","+outerRadius+")"); 
    console.log(arcs);
    console.log(piedata);
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
            switch(xstring){
                case "性别":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueGender")
                        .text(d.data["key"]);
                    d3.select("#nameGender").classed("hidden",false);
                    break;
                case "病史":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueMedHistory")
                        .text(d.data["key"]);
                    d3.select("#nameMedHistory").classed("hidden",false);
                    break;
                case "自检表征":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueSelfInsCharacter")
                        .text(d.data["key"]);
                    d3.select("#nameSelfInsCharacter").classed("hidden",false);
                    break;
                case "触检表征":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueChuCharacter")
                        .text(d.data["key"]);
                    d3.select("#nameChuCharacter").classed("hidden",false);
                    break;
                case "肿瘤性质":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueproperty")
                        .text(d.data["key"]);
                    d3.select("#nameproperty").classed("hidden",false);
                    break;
                case "是否转移":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueWheTransfer")
                        .text(d.data["key"]);
                    d3.select("#nameWheTransfer").classed("hidden",false);
                    break;
                case "初检分型":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueInitialTypes")
                        .text(d.data["key"]);
                    d3.select("#nameInitialTypes").classed("hidden",false);
                    break;
                case "化疗用药":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueCheMedicine")
                        .text(d.data["key"]);
                    d3.select("#nameCheMedicine").classed("hidden",false);
                    break;
                case "不良反应":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueAdReaction")
                        .text(d.data["key"]);
                    d3.select("#nameAdReaction").classed("hidden",false);
                    break;
                case "年龄":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valueage")
                        .text(d.data["key"]);
                    d3.select("#nameage").classed("hidden",false);
                    break;
                case "化疗时长":
                    d3.select("#tooltip")
                        .style("left",e.clientX-1200+"px")
                        .style("top",e.clientY-600+"px")
                        .select("#valuechemotherapy")
                        .text(d.data["key"]);
                    d3.select("#namechemotherapy").classed("hidden",false);
                    break;
            }
            d3.select("#tooltip")
                .select("#valueproportion")
                .text(toPercent(d.value/chemotherapyduration.length))
            d3.select("#nameproportion").classed("hidden",false);
            d3.select("#tooltip").classed("hidden",false);
          })
        .on("mouseout",function(){
            d3.select(this)
              .attr("fill",currentcolor);
            arcs.select("#tooltip").remove();
            d3.select("#tooltip").classed("hidden",true);
            d3.select("#nameGender").classed("hidden",true);
            d3.select("#nameMedHistory").classed("hidden",true);
            d3.select("#nameSelfInsCharacter").classed("hidden",true);
            d3.select("#nameChuCharacter").classed("hidden",true);
            d3.select("#nameWheTransfer").classed("hidden",true);
            d3.select("#nameInitialTypes").classed("hidden",true);
            d3.select("#nameCheMedicine").classed("hidden",true);
            d3.select("#nameAdReaction").classed("hidden",true);
            d3.select("#namechemotherapy").classed("hidden",true);
            d3.select("#nameage").classed("hidden",true);
            d3.select("#nameproperty").classed("hidden",true);
            d3.select("#nameproportion").classed("hidden",true);
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