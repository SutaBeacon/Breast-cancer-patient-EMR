import { tumourid,dataset,tumourevenness,tumourgirth,tumourarea } from '../data/metedata';
import math from '../math';
var drawlinechart= function (shape){
    var width = 700;
    var height = 500;
    var padding = 20;
    var elementy = document.getElementById("yaxis");
    var s = elementy.innerText;
    var yAxisWidth = Math.max.apply(Math,dataset.map(d=>d[elementy.innerText]));
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
        .attr("width",width)
        .attr("height",height)
        .call(zoom);
    var xScale = d3.scalePoint()
        .domain(tumourid)
        .range([2*padding,width-2*padding]);
    var yScale = d3.scaleLinear()
        .domain([0,1.1*yAxisWidth])
        .range([height-3*padding,3*padding]);
    var xAxis = d3.axisBottom(xScale)
        .tickSize(0)
        .tickPadding(6)
        .tickValues(xScale.domain().filter(function(d,i){return !(i%10)}));
    var yAxis =d3.axisLeft(yScale).tickSize(0);
    function make_y_axis(){
      return d3.axisLeft(yScale);
    }
    svg.append("defs").append("clipPath")
        .attr("id","myclip")
        .append("rect")
        .attr("x","40")
        .attr("y","0")
        .attr("width","630")
        .attr("height","500");
    function zoom(svg){
      const extent = [[2*padding,3*padding],[width-2*padding,height-3*padding]];
      svg.call(d3.zoom()
        .scaleExtent([1,20])
        .translateExtent(extent)// availabel translate extent of svg elements
        .extent(extent) // the max left border of translate viewport  and the min right border of translate viewport
        .on("zoom",zoomed));
      function zoomed(){
        xScale.range([2*padding,width-2*padding].map(d => d3.event.transform.applyX(d)));
        d3.select(".axis--x").call(xAxis);
        d3.select("#pathline").attr("d",line.x(function(d){return xScale(d["ID "]);}));
        if(shape == "circle"){
          d3.select("#svgcircles").selectAll("circle").attr("cx",line.x());
        }else if(shape == "rect"){
          d3.select("#svgrects").selectAll("rect").attr("x",function(d){
            return xScale(d["ID "]) - document.getElementById("variablessize").value/2;
          });
        }else if(shape == "ellipse"){
          d3.select("#svgellipses").selectAll("ellipse").attr("cx",line.x());
        }
      }
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
        .attr("transform","rotate(90)"+"translate("+(1.4*padding)+(-padding)+")")
     svg.append("text")
        .attr("fill","black")
        .attr("text-anchor","end")
        .attr("font-size",10)
        .attr("x",width)
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
    var line = d3.line()
        .x(function(d){return xScale(d["ID "])})
        .y(function(d){return yScale(d[s])});
    svg.append("path")
        .datum(dataset)
        .attr("id","pathline")
        .attr("clip-path","url(#myclip)")
        .attr("stroke",document.getElementById("variablescolor").value)
        .attr("fill","none")
        .attr("d",line);
    if(shape == "circle"){
      var g = svg.append("g")
      .attr("id","svgcircles")
      .attr("clip-path","url(#myclip)")
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class","linecircle")
      .attr("cx",line.x())
      .attr("cy",line.y())
      .attr("r",document.getElementById("variablessize").value)
      .attr("fill",document.getElementById("variablescolor").value)
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("cx"));
        var yPosition = parseFloat(d3.select(this).attr("cy"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px")
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#nameid").classed("hidden",false);
        if((s == "肿瘤平滑度")||(Math.abs(pccs_id_evenness) > 0.1)||
        ((s == "肿瘤周长")&&(Math.abs(pccs_girth_evenness)>0.1))||
        ((s == "肿瘤面积")&&(Math.abs(pccs_area_evenness)>0.1))){
          d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
          d3.select("#nameevenness").classed("hidden",false);
        }
        if(s != "肿瘤平滑度"){
          d3.select("#tooltip")
            .select("#valueproperty")
            .text(d["肿瘤性质"]);
          d3.select("#nameproperty").classed("hidden",false);
        }
        if((s == "肿瘤周长")||(Math.abs(pccs_id_girth)>0.1)||
        ((s == "肿瘤面积")&&(Math.abs(pccs_area_girth)>0.1))||
        ((s == "肿瘤平滑度")&&(Math.abs(pccs_girth_evenness)>0.1))){
          d3.select("#tooltip")
            .select("#valuegirth")
            .text(d["肿瘤周长"]);
          d3.select("#namegirth").classed("hidden",false);
        }
        if((s == "肿瘤面积")||(Math.abs(pccs_id_area)>0.1)||
        ((s == "肿瘤周长")&&(Math.abs(pccs_area_girth)>0.1))||
        ((s == "肿瘤平滑度")&&(Math.abs(pccs_area_evenness)>0.1))){
          d3.select("#tooltip")
            .select("#valuearea")
            .text(d["肿瘤面积"]);
          d3.select("#namearea").classed("hidden",false);
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
        var spannode = document.getElementsByTagName("span");
        for(var i=0;i<spannode.length;i++){
          spannode[i].innerText="";
        }
      });
    }else if(shape == "rect"){
      var x =line.x();
      var y = line.y();
      var g = svg.append("g")
      .attr("id","svgrects")
      .attr("clip-path","url(#myclip)")
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x",function(d){
        return xScale(d["ID "]) - document.getElementById("variablessize").value/2;
      })
      .attr("y",function(d){
        return yScale(d[s]) - document.getElementById("variablessize").value/2;
      })
      .attr("width",document.getElementById("variablessize").value)
      .attr("height",document.getElementById("variablessize").value)
      .attr("fill",document.getElementById("variablescolor").value)
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("x"));
        var yPosition = parseFloat(d3.select(this).attr("y"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px")
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#nameid").classed("hidden",false);
        if((s == "肿瘤平滑度")||(Math.abs(pccs_id_evenness) > 0.1)||
        ((s == "肿瘤周长")&&(Math.abs(pccs_girth_evenness)>0.1))||
        ((s == "肿瘤面积")&&(Math.abs(pccs_area_evenness)>0.1))){
          d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
          d3.select("#nameevenness").classed("hidden",false);
        }
        if(s != "肿瘤平滑度"){
          d3.select("#tooltip")
            .select("#valueproperty")
            .text(d["肿瘤性质"]);
          d3.select("#nameproperty").classed("hidden",false);
        }
        if((s == "肿瘤周长")||(Math.abs(pccs_id_girth)>0.1)||
        ((s == "肿瘤面积")&&(Math.abs(pccs_area_girth)>0.1))||
        ((s == "肿瘤平滑度")&&(Math.abs(pccs_girth_evenness)>0.1))){
          d3.select("#tooltip")
            .select("#valuegirth")
            .text(d["肿瘤周长"]);
          d3.select("#namegirth").classed("hidden",false);
        }
        if((s == "肿瘤面积")||(Math.abs(pccs_id_area)>0.1)||
        ((s == "肿瘤周长")&&(Math.abs(pccs_area_girth)>0.1))||
        ((s == "肿瘤平滑度")&&(Math.abs(pccs_area_evenness)>0.1))){
          d3.select("#tooltip")
            .select("#valuearea")
            .text(d["肿瘤面积"]);
          d3.select("#namearea").classed("hidden",false);
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
        var spannode = document.getElementsByTagName("span");
        for(var i=0;i<spannode.length;i++){
          spannode[i].innerText="";
        }
      });
    }else if(shape == "ellipse"){
      var g = svg.append("g")
      .attr("id","svgellipses")
      .attr("clip-path","url(#myclip)")
      .selectAll("ellipse")
      .data(dataset)
      .enter()
      .append("ellipse")
      .attr("cx",line.x())
      .attr("cy",line.y())
      .attr("rx",document.getElementById("variablessize").value)
      .attr("ry",document.getElementById("variablessize").value/2)
      .attr("fill",document.getElementById("variablescolor").value)
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("cx"));
        var yPosition = parseFloat(d3.select(this).attr("cy"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px")
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#nameid").classed("hidden",false);
        if((s == "肿瘤平滑度")||(Math.abs(pccs_id_evenness) > 0.1)||
        ((s == "肿瘤周长")&&(Math.abs(pccs_girth_evenness)>0.1))||
        ((s == "肿瘤面积")&&(Math.abs(pccs_area_evenness)>0.1))){
          d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
          d3.select("#nameevenness").classed("hidden",false);
        }
        if(s != "肿瘤平滑度"){
          d3.select("#tooltip")
            .select("#valueproperty")
            .text(d["肿瘤性质"]);
          d3.select("#nameproperty").classed("hidden",false);
        }
        if((s == "肿瘤周长")||(Math.abs(pccs_id_girth)>0.1)||
        ((s == "肿瘤面积")&&(Math.abs(pccs_area_girth)>0.1))||
        ((s == "肿瘤平滑度")&&(Math.abs(pccs_girth_evenness)>0.1))){
          d3.select("#tooltip")
            .select("#valuegirth")
            .text(d["肿瘤周长"]);
          d3.select("#namegirth").classed("hidden",false);
        }
        if((s == "肿瘤面积")||(Math.abs(pccs_id_area)>0.1)||
        ((s == "肿瘤周长")&&(Math.abs(pccs_area_girth)>0.1))||
        ((s == "肿瘤平滑度")&&(Math.abs(pccs_area_evenness)>0.1))){
          d3.select("#tooltip")
            .select("#valuearea")
            .text(d["肿瘤面积"]);
          d3.select("#namearea").classed("hidden",false);
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
        var spannode = document.getElementsByTagName("span");
        for(var i=0;i<spannode.length;i++){
          spannode[i].innerText="";
        }
      });
    }
  }
export { drawlinechart };