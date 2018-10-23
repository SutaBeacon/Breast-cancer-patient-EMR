d3.csv("./dataset.csv").then(function(data){
  tumourid=[];
  tumourproperty=[];
  tumourgirth=[];
  tumourevenness=[];
  tumourarea = [];
  for(var i=0;i<data.length;i++){
    tumourid.push(data[i]["ID "]);
    tumourproperty.push(data[i]["肿瘤性质"]);
    tumourgirth.push(+data[i]["肿瘤周长"]);
    tumourevenness.push(+data[i]["肿瘤平滑度"]);
    tumourarea.push(+data[i]["肿瘤面积"]);
  }
  dataset = data;
  //xAxisWidth = d3.max(tumourevenness);
  xAxisWidth = d3.max(tumourid);
  //yAxisWidth = d3.max(tumourarea);
  yAxisWidth = d3.max(tumourevenness);
  //drawscatter();
  drawcolumn();
});


function drawcolumn(){
  var width=700;
  var height=500;
  var padding=20;
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width",width)
      .attr("height",height)
      .attr("overflow","visible");

  var xScale = d3.scaleBand()
      .domain(tumourid)
      .rangeRound([2*padding,width-padding*2]);

  var yScale = d3.scaleLinear()
      .domain([0,1.1*yAxisWidth])
      .range([height-padding,padding]);

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

  function make_y_axis(){
    return d3.axisLeft(yScale);
  }


  svg.append("g")
      .attr("class","grid")
      .call(make_y_axis()
       .tickSize(-width+4*padding,0,0)
       .tickFormat(""))
      .attr("transform","translate("+(2*padding)+",0)");

  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate(0,"+(height-padding)+")")
      .call(xAxis)
      .selectAll("text")
      .attr("transform","rotate(90)"+"translate("+(1.4*padding)+",0)")

  svg.append("text")
      .attr("text-anchor","end")
      .attr("font-size",10)
      .attr("x",width)
      .attr("y",height-padding/2)
      .text("肿瘤ID");
  
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate("+(2*padding)+",0)")
      .call(yAxis);
  svg.append("text")
      .attr("text-anchor","start")
      .attr("font-size",10)
      .attr("x",0)
      .attr("y",padding)
      .text("肿瘤平滑度");
  
  var rectpadding = 1;

  var rects = svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("fill","red")
      .attr("transform","translate("+(-padding)+","+padding+")")
      .attr("x",function(d){
        return xScale(d["ID "])+rectpadding/2;
      })
      .attr("y",function(d){
        return yScale(d["肿瘤平滑度"]);
      })
      .attr("width",xScale.bandwidth())
      .attr("height",function(d){
        return height-yScale(d["肿瘤平滑度"])-2*padding;
      })
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("x"))+xScale.bandwidth()/2;
        var yPosition = parseFloat(d3.select(this).attr("y"))+14;
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
            .select("#value")
            .text(d["ID "]);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("fill","red");
       // d3.select("#tooltip").remove();
        d3.select("#tooltip").classed("hidden",false);
    })
      /*
      .append("title")
      .text(function(d){
          return d["ID "];//why title didn't show in bar chart
      });*/
}


function drawscatter(){
  var width=500;
  var height=500;
  var padding=20;
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width",width)
      .attr("height",height)

  var xScale = d3.scaleLinear()
      .domain([0,1.1*xAxisWidth])
      .range([2*padding,width-padding*2]);

  var yScale = d3.scaleLinear()
      .domain([0,1.1*yAxisWidth])
      .range([height-padding,padding]);

  var circle=svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("fill","red")
      .attr("cx",function(d){
        return padding+xScale(d["肿瘤平滑度"]);
      })
      .attr("cy",function(d){
        return yScale(d["肿瘤面积"])+padding;
      })
      .attr("r",5);

  var xAxis = d3.axisBottom(xScale).tickSize(0,0,0);
      

  var yAxis = d3.axisLeft(yScale).tickSize(0,0,0);
  
  function make_x_axis(){
    return d3.axisBottom(xScale);
  }
  function make_y_axis(){
    return d3.axisLeft(yScale);
  }
  svg.append("g")
    .attr("class","grid")
    .call(make_x_axis()
      .tickSize(height-2*padding,0,0)
      .tickFormat("")
    )
    .attr("transform","translate(0,"+padding+")");
  svg.append("g")
  .attr("class","grid")
  .call(make_y_axis()
    .tickSize(-width+4*padding,0,0)
    .tickFormat("")
  )
  .attr("transform","translate("+(2*padding)+",0)");
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate(0,"+(height-padding)+")")
      .call(xAxis);
  svg.append("text")
      .attr("text-anchor","end")
      .attr("font-size",10)
      .attr("x",width)
      .attr("y",height-padding/2)
      .text("肿瘤周长");
  
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate("+(2*padding)+",0)")
      .call(yAxis)
  svg.append("text")
      .attr("text-anchor","start")
      .attr("font-size",10)
      .attr("x",0)
      .attr("y",padding)
      .text("肿瘤面积");
}