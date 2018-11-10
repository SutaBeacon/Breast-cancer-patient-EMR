import { tumourid,dataset,tumourevenness,tumourgirth,tumourarea } from '../data/metedata';
import math from '../math';
var drawhollow = function(xAxisWidth,yAxisWidth,xstring,ystring,shape){
    var width=500;
    var height=500;
    var padding=20;
    var pccs_area_girth = math.calculate(tumourarea,tumourgirth);
    console.log(pccs_area_girth);
    var pccs_area_evenness = math.calculate(tumourarea,tumourevenness);
    console.log(pccs_area_evenness);
    var pccs_girth_evenness = math.calculate(tumourgirth,tumourevenness);
    console.log(pccs_girth_evenness);
    var svg = d3.select("#chart")
        .append("svg")
        .attr("id","hollow")
        .attr("width",width)
        .attr("height",height)
  
    var xScale = d3.scaleLinear()
        .domain([0,1.1*xAxisWidth])
        .range([2*padding,width-padding*2]);
  
    var yScale = d3.scaleLinear()
        .domain([0,1.1*yAxisWidth])
        .range([height-padding,padding]);
        
  
    var brush = d3.brush().on("end",brushended),
      idleTimeout,
      idleDelay = 350;
    svg.append("g")
      .attr("id","brush")
      .call(brush);
    svg.append("defs").append("clipPath")
        .attr("id","myclip")
        .append("rect")
        .attr("x","40")
        .attr("y","20")
        .attr("width","420")
        .attr("height","460");
    function brushended(){
      var s = d3.event.selection;
      if(!s){
        if(!idleTimeout){
          return idleTimeout = setTimeout(idled,idleDelay);
        }
        xScale.domain([0,1.1*xAxisWidth]).range([2*padding,width-2*padding]);
        yScale.domain([0,1.1*yAxisWidth]).range([height-padding,padding]);
      }else{
        xScale.domain([s[0][0],s[1][0]].map(xScale.invert,xScale)).range([2*padding,width-2*padding]);
        yScale.domain([s[1][1],s[0][1]].map(yScale.invert,yScale)).range([height-padding,padding]);
        svg.select("#brush").call(brush.move,null);
      }
      zoom();
    }
    function idled(){
      idleTimeout = null;
    }
    function zoom(){
      var t = svg.transition().duration(750);
      svg.select(".axis--x").transition(t).call(xAxis);
      svg.select(".axis--y").transition(t).call(yAxis);
      svg.select(".grid--x").transition(t).call(make_x_axis()
      .tickSize(height-2*padding,0,0)
      .tickFormat(""));
      svg.select(".grid--y").transition(t).call(make_y_axis()
      .tickSize(-width+4*padding,0,0)
      .tickFormat(""));
      if(shape == "circle"){
        d3.select("#svgcircles").selectAll("circle").transition(t)
          .attr("cx",function(d){return xScale(d[xstring]);})
          .attr("cy",function(d){return yScale(d[ystring]);});
      }else if(shape == "rect"){
        d3.select("#svgrects").selectAll("rect").transition(t)
          .attr("x",function(d){
            return xScale(d[xstring]) - document.getElementById("variablessize").value/2;
          })
          .attr("y",function(d){
            return yScale(d[ystring]) - document.getElementById("variablessize").value/2;
          });
      }else if(shape == "ellipse"){
        d3.select("#svgellipses").selectAll("ellipse").transition(t)
        .attr("cx",function(d){return xScale(d[xstring])})
        .attr("cy",function(d){return yScale(d[ystring])});
      }
    }
  
  
    if(shape == "circle"){
      var circle=d3.select("#brush").append("g")
      .attr("id","svgcircles")
      .attr("clip-path","url(#myclip)")
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("fill","none")
      .attr("stroke",document.getElementById("variablescolor").value)
      .attr("cx",function(d){
        return xScale(d[xstring]);
        console.log(xstring);
      })
      .attr("cy",function(d){
        return yScale(d[ystring]);
        console.log(ystring);
      })
      .attr("r",document.getElementById("variablessize").value)
      .on("mouseover",function(d){
        d3.select(this)
          .attr("stroke","black");
        var xPosition = parseFloat(d3.select(this).attr("cx"));
        var yPosition = parseFloat(d3.select(this).attr("cy"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px");
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#namegirth").classed("hidden",false);
        d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
        d3.select("#namearea").classed("hidden",false);
        d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
        d3.select("#nameevenness").classed("hidden",false);
        d3.select("#tooltip").classed("hidden",false);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("stroke",document.getElementById("variablescolor").value);
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
      var circle=d3.select("#brush").append("g")
        .attr("id","svgrects")
        .attr("clip-path","url(#myclip)")
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("fill","none")
        .attr("stroke",document.getElementById("variablescolor").value)
        .attr("x",function(d){
          return xScale(d[xstring]) - document.getElementById("variablessize").value/2;
        })
        .attr("y",function(d){
          return yScale(d[ystring]) - document.getElementById("variablessize").value/2;
        })
        .attr("width",document.getElementById("variablessize").value)
        .attr("height",document.getElementById("variablessize").value)
        .on("mouseover",function(d){
          d3.select(this)
            .attr("stroke","black");
          var xPosition = parseFloat(d3.select(this).attr("x"));
          var yPosition = parseFloat(d3.select(this).attr("y"));
          d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px");
          //if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
            d3.select("#tooltip")
              .select("#valuegirth")
              .text(d["肿瘤周长"]);
            d3.select("#namegirth").classed("hidden",false);
          //}
          //if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
            d3.select("#tooltip")
            .select("#valuearea")
            .text(d["肿瘤面积"]);
            d3.select("#namearea").classed("hidden",false);
          //}
          //if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
            d3.select("#tooltip")
            .select("#valueevenness")
            .text(d["肿瘤平滑度"]);
            d3.select("#nameevenness").classed("hidden",false);
          //}
          d3.select("#tooltip").classed("hidden",false);
        })
        .on("mouseout",function(){
          d3.select(this)
            .attr("stroke",document.getElementById("variablescolor").value);
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
      var circle=d3.select("#brush").append("g")
      .attr("id","svgellipses")
      .attr("clip-path","url(#myclip)")
      .selectAll("ellipse")
      .data(dataset)
      .enter()
      .append("ellipse")
      .attr("fill","none")
      .attr("stroke",document.getElementById("variablescolor").value)
      .attr("cx",function(d){
        return xScale(d[xstring]);
        console.log(xstring);
      })
      .attr("cy",function(d){
        return yScale(d[ystring]);
        console.log(ystring);
      })
      .attr("rx",document.getElementById("variablessize").value)
      .attr("ry",document.getElementById("variablessize").value/2)
      .on("mouseover",function(d){
        d3.select(this)
          .attr("stroke","black");
        var xPosition = parseFloat(d3.select(this).attr("cx"));
        var yPosition = parseFloat(d3.select(this).attr("cy"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px");
        //if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
          d3.select("#tooltip")
            .select("#valuegirth")
            .text(d["肿瘤周长"]);
          d3.select("#namegirth").classed("hidden",false);
        //}
        //if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
          d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
          d3.select("#namearea").classed("hidden",false);
        //}
        //if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
          d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
          d3.select("#nameevenness").classed("hidden",false);
        //}
        d3.select("#tooltip").classed("hidden",false);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("stroke",document.getElementById("variablescolor").value);
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
    
  
    var xAxis = d3.axisBottom(xScale).tickSize(0,0,0);
        
  
    var yAxis = d3.axisLeft(yScale).tickSize(0,0,0);
    
    function make_x_axis(){
      return d3.axisBottom(xScale);
    }
    function make_y_axis(){
      return d3.axisLeft(yScale);
    }
    svg.append("g")
      .attr("stroke","lightgray")
      .attr("stroke-opacity","0.1")
      .attr("shape-rendering","crispEdges")
      .call(make_x_axis()
        .tickSize(height-2*padding,0,0)
        .tickFormat("")
      )
      .attr("transform","translate(0,"+padding+")");
    svg.append("g")
    .attr("stroke","lightgray")
    .attr("stroke-opacity","0.1")
    .attr("shape-rendering","crispEdges")
    .call(make_y_axis()
      .tickSize(-width+4*padding,0,0)
      .tickFormat("")
    )
    .attr("transform","translate("+(2*padding)+",0)");
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(0,"+(height-padding)+")")
        .call(xAxis)
        .append("text")
        .attr("fill","black")
        .attr("text-anchor","end")
        .attr("font-size",10)
        .attr("x",width)
        .attr("y",0)
        .text(xstring);
    
    svg.append("g")
        .attr("class","axis")
        .attr("transform","translate("+(2*padding)+",0)")
        .call(yAxis)
        .append("text")
        .attr("fill","black")
        .attr("text-anchor","middle")
        .attr("font-size",10)
        .attr("x",0)
        .attr("y",padding)
        .text(ystring);
    
    svg.selectAll("text")
        .attr("fill","black");
  }
export {drawhollow};