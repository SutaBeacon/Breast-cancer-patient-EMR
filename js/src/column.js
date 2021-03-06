import { tumourid,dataset,tumourevenness,tumourgirth,tumourarea,readobjectarray } from '../data/metedata';
import math from '../math';
var drawcolumn = function (){
    var width=700;
    var height=500;
    var padding=20;
    var elementy = [];
    var s;
    for(var i=0;i<11;i++){
      elementy[i] = document.getElementById(`yaxis_${i}`);
      if(elementy[i] != null){
        s = elementy[i].innerText;
        break;
      }
    }
    var yAxisWidth = Math.max.apply(Math,dataset.map(d=>d[s]));
    readobjectarray(dataset);
    var pccs_id_evenness = math.calculate(tumourid,tumourevenness);
    console.log(pccs_id_evenness);
    var pccs_id_girth = math.calculate(tumourid,tumourgirth);
    console.log(pccs_id_girth);
    var pccs_id_area = math.calculate(tumourid,tumourarea);
    console.log(pccs_id_area);
    var pccs_area_girth = math.calculate(tumourarea,tumourgirth);
    console.log(pccs_area_girth);
    var pccs_area_evenness = math.calculate(tumourarea,tumourevenness);
    console.log(pccs_area_evenness);
    var pccs_girth_evenness = math.calculate(tumourgirth,tumourevenness);
    console.log(pccs_girth_evenness);
    var svg = d3.select("#chart")
        .append("svg")
        .attr("id","column")
        .attr("width",width)
        .attr("height",height)
        .call(zoom);
  
    var xScale = d3.scaleBand()
        .domain(tumourid)
        .rangeRound([2*padding,width-2*padding]);
  
    var yScale = d3.scaleLinear()
        .domain([0,1.1*yAxisWidth])
        .range([height-3*padding,3*padding]);
  
    var xAxis = d3.axisBottom(xScale)
        .tickSize(0)
        .tickPadding(6)
        .tickValues(xScale.domain().filter(function(d,i){return !(i%10)}));
        
    var yAxis = d3.axisLeft(yScale).tickSize(0);
    /*
    var tip =d3.tip()
        .attr("class","d3-tip")
        .offset([-10,0])
        .html(function(d){
            return "<strong>ID:</strong><span " + d["ID "]+"</span>";
        })
  
    svg.call(tip);*/
    function zoom(svg){
      const extent = [[2*padding,3*padding],[width-2*padding,height-3*padding]];
      svg.call(d3.zoom()
        .scaleExtent([1,20])
        .translateExtent(extent)
        .extent(extent)
        .on("zoom",zoomed));
      function zoomed(){
        xScale.range([2*padding,width-2*padding].map(d => d3.event.transform.applyX(d)));
        svg.select("#svgrects")
          .selectAll("rect")
          .attr("x",function(d){
            return xScale(d["ID "])+xScale.bandwidth()/2;
          })
          .attr("width",xScale.bandwidth());
        svg.select(".axis--x").call(xAxis);
      }
    }
    svg.append("defs").append("clipPath")
        .attr("id","myclip")
        .append("rect")
        .attr("x","40")
        .attr("y","0")
        .attr("width","600")
        .attr("height","500");
    function make_y_axis(){
      return d3.axisLeft(yScale);
    }
    svg.append("g")
        .attr("stroke","lightgray")
        .attr("stroke-opacity","0.1")
        .attr("shape-rendering","crispEdges")
        .call(make_y_axis()
         .tickSize(-width+4*padding,0,0)
         .tickFormat(""))
        .attr("transform","translate("+(2*padding)+",0)");
  
    svg.append("g")
        .attr("class","axis axis--x")
        .attr("clip-path","url(#myclip)")
        .attr("transform","translate(0,"+(height-3*padding)+")")
        .call(xAxis)
        .selectAll("text")
        .attr("transform","rotate(90)"+"translate("+(1.4*padding)+",0)")
    svg.append("text")
        .attr("fill","black")
        .attr("text-anchor","end")
        .attr("font-size",10)
        .attr("x",width-padding)
        .attr("y",height-2*padding)
        .text("肿瘤ID");
    
    svg.append("g")
        .attr("class","axis axis--y")
        .attr("transform","translate("+(2*padding)+",0)")
        .call(yAxis)
        .append("text")
        .attr("text-anchor","middle")
        .attr("font-size",10)
        .attr("fill","black")
        .attr("x",0)
        .attr("y",3*padding)
        .text(s);
    
    svg.selectAll("text")
        .attr("fill","black");
    var rects = svg.append("g")
        .attr("id","svgrects")
        .attr("clip-path","url(#myclip)")
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("fill",document.getElementById("variablescolor").value)
        .attr("x",function(d){
          return xScale(d["ID "])+xScale.bandwidth()/2;
        })
        .attr("y",function(d){
          return yScale(d[s]);
        })
        .attr("width",xScale.bandwidth())
        .attr("height",function(d){
          return height-yScale(d[s])-3*padding;
        })
        .on("mouseover",function(d){
          d3.select(this)
            .attr("fill","black");
          var xPosition = parseFloat(d3.select(this).attr("x"))+20;
          var yPosition = parseFloat(d3.select(this).attr("y"))+20;
          
          /*
          svg.append("text")
            .attr("id","tooltip")
            .attr("x",xPosition)
            .attr("y",yPosition)
            .attr("text-anchor","middle")
            .attr("font-family","sans-serif")
            .attr("font-size","11px")
            .attr("fill","black")
            .text(d["ID "])*/
          d3.select("#tooltip")
            .style("left",xPosition+"px")
            .style("top",yPosition+"px")
            .select("#valueid")
            .text(d["ID "]);
          d3.select("#nameid").classed("hidden",false);
          if(s =="年龄"){
            d3.select("#tooltip")
            .select("#valueage")
            .text(d["年龄"]);
            d3.select("#nameage").classed("hidden",false);
            d3.select("#tooltip")
            .select("#valueTuTexture")
            .text(d["肿瘤质地"]);
            d3.select("#nameTuTexture").classed("hidden",false);
          }else{
            d3.select("#valueTuRadius").text(d["肿瘤半径"]);
            d3.select("#nameTuRadius").classed("hidden",false);
            d3.select("#valuegirth").text(d["肿瘤周长"]);
            d3.select("#namegirth").classed("hidden",false);
            d3.select("#valuearea").text(d["肿瘤面积"]);
            d3.select("#namearea").classed("hidden",false);
            d3.select("#valueTuDensity").text(d["肿瘤致密度"]);
            d3.select("#nameTuDensity").classed("hidden",false);
            d3.select("#valueTuSunken").text(d["肿瘤凹陷度"]);
            d3.select("#nameTuSunken").classed("hidden",false);
            d3.select("#valueTuSunPoint").text(d["凹陷点数"]);
            d3.select("#nameTuSunPoint").classed("hidden",false);
            d3.select("#valueSymmetry").text(d["对称性"]);
            d3.select("#nameSymmetry").classed("hidden",false);
            if(s != "肿瘤质地"){
              d3.select("#valueevenness").text(d["肿瘤平滑度"]);
              d3.select("#nameevenness").classed("hidden",false);
            }else{
              d3.select("#valueage").text(d["年龄"]);
              d3.select("#nameage").classed("hidden",false);
            }
            if(s != "肿瘤平滑度"){
              d3.select("#valueTuTexture").text(d["肿瘤质地"]);
              d3.select("#nameTuTexture").classed("hidden",false);
            }
          }
          d3.select("#tooltip").classed("hidden",false);
        })
        .on("mouseout",function(){
          d3.select(this)
            .attr("fill",document.getElementById("variablescolor").value);
          d3.select("#tooltip").classed("hidden",true);
          d3.select("#nameid").classed("hidden",true);
          d3.select("#nameproperty").classed("hidden",true);
          d3.select("#nameevenness").classed("hidden",true);
          d3.select("#namegirth").classed("hidden",true);
          d3.select("#namearea").classed("hidden",true);
          d3.select("#nameage").classed("hidden",true);
          d3.select("#nameTuRadius").classed("hidden",true);
          d3.select("#nameTuTexture").classed("hidden",true);
          d3.select("#nameTuDensity").classed("hidden",true);
          d3.select("#nameTuSunken").classed("hidden",true);
          d3.select("#nameTuSunPoint").classed("hidden",true);
          d3.select("#nameSymmetry").classed("hidden",true);
          var spannode = document.getElementsByTagName("span");
          for(var i=0;i<spannode.length;i++){
            spannode[i].innerText="";
          }
        });
        /*
        .append("title")
        .text(function(d){
            return d["ID "];//why title didn't show in bar chart
        });*/
  }
export {drawcolumn};
  