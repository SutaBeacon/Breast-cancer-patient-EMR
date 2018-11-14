import {dataset} from '../data/metedata';
var drawscatter = function(shape){
    var elementx = document.getElementById("xaxis");
    var elementy = document.getElementById("yaxis");
    var ystring = elementy.innerText;
    var xstring = elementx.innerText;
    var xAxisWidth = Math.max.apply(Math,dataset.map(d=>d[elementx.innerText]));
    var yAxisWidth = Math.max.apply(Math,dataset.map(d=>d[elementy.innerText]));
    var width=500;
    var height=500;
    var padding=20;
    var svg = d3.select("#chart")
        .append("svg")
        .attr("id","solid")
        .attr("width",width)
        .attr("height",height)
  
    var xScale = d3.scaleLinear()
        .domain([0,1.1*xAxisWidth])
        .range([2*padding,width-padding*2]);
  
    var yScale = d3.scaleLinear()
        .domain([0,1.1*yAxisWidth])
        .range([height-padding,padding]);
    if(shape == "circle"){
      var circle =svg.append("g")
        .attr("id","svgcircles")
        .attr("clip-path","url(#myclip)")
        .selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("fill",document.getElementById("variablescolor").value)
        .attr("cx",function(d){
          return xScale(d[xstring]);
          console.log(xstring);
        })
        .attr("cy",function(d){
          return yScale(d[ystring]);
          console.log(ystring);
        })
        .attr("r",document.getElementById("variablessize").value)
        //.attr("transform",transform(d3.zoomIdentity))
        .on("mouseover",function(d){
          //console.log("mouseover");
          d3.select(this)
            .attr("fill","black");
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
      var g = svg.append("g")
      .attr("id","svgrects")
      .attr("clip-path","url(#myclip)")
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x",function(d){
        return xScale(d[xstring]) - document.getElementById("variablessize").value/2;
      })
      .attr("y",function(d){
        return yScale(d[ystring]) - document.getElementById("variablessize").value/2;
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
      .attr("cx",function(d){
        return xScale(d[xstring]);
      })
      .attr("cy",function(d){
        return yScale(d[ystring]);
      })
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
    
  
    var xAxis = d3.axisBottom(xScale).tickSize(0,0,0);
        
  
    var yAxis = d3.axisLeft(yScale).tickSize(0,0,0);
    
    function make_x_axis(){
      return d3.axisBottom(xScale);
    }
    function make_y_axis(){
      return d3.axisLeft(yScale);
    }
    svg.append("g")
      .attr("calss","grid grid--x")
      .attr("stroke","lightgray")
      .attr("stroke-opacity","0.1")
      .attr("shape-rendering","crispEdges")
      .call(make_x_axis()
        .tickSize(height-2*padding,0,0)
        .tickFormat("")
      )
      .attr("transform","translate(0,"+padding+")");
    svg.append("g")
    .attr("class","grid grid--y")
    .attr("stroke","lightgray")
    .attr("stroke-opacity","0.1")
    .attr("shape-rendering","crispEdges")
    .call(make_y_axis()
      .tickSize(-width+4*padding,0,0)
      .tickFormat("")
    )
    .attr("transform","translate("+(2*padding)+",0)");
    svg.append("g")
        .attr("class","axis axis--x")
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
        .attr("class","axis axis--y")
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
    /*svg.append("rect")
        .attr("fill","none")
        .attr("pointer-events","all")
        .attr("width",width)
        .attr("height",height)
        .call(d3.zoom()
          .scaleExtent([1,8])
          .on("zoom",zoom));
      function zoom(){
        //circle.attr("transform",transform(d3.event.transform));
        circle.attr("transform",d3.event.transform);
      }
      
      function transform(t){
        return function(d){
          return "translate("+t.apply(d)+")";
        };
      }
    */
    svg.append("defs").append("clipPath")
        .attr("id","myclip")
        .append("rect")
        .attr("x","40")
        .attr("y","20")
        .attr("width","420")
        .attr("height","460");
    var brush = d3.brush().on("end",brushended),
        idleTimeout,
        idleDelay = 350;
    svg.append("g")
        .attr("id","brush")
        .call(brush);
    d3.select(".overlay").attr("pointer-events","none");
    d3.select("svg")
    .on("mousedown",function(){
      d3.select(".overlay").attr("pointer-events","all");
    });
        
    function brushended(){
      var s = d3.event.selection;
      if(!s){
        if(!idleTimeout){
          return idleTimeout = setTimeout(idled,idleDelay);
        }
        xScale.domain([0,1.1*xAxisWidth]);
        yScale.domain([0,1.1*yAxisWidth]);
      }else{
        xScale.domain([s[0][0],s[1][0]].map(xScale.invert,xScale));
        yScale.domain([s[1][1],s[0][1]].map(yScale.invert,yScale));
        svg.select("#brush").call(brush.move,null);
      }
      d3.select(".overlay").attr("pointer-events","none");
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
  }
export {drawscatter};
  