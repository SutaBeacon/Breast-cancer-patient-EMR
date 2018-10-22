d3.csv("./dataset.csv").then(function(data){
  tumourid=[];
  tumourproperty=[];
  tumourgirth=[];
  tumourevenness=[];
  tumourarea = [];
  for(var i=0;i<data.length;i++){
    tumourid.push(+data[i]["ID "]);
    tumourproperty.push(data[i]["肿瘤性质"]);
    tumourgirth.push(+data[i]["肿瘤周长"]);
    tumourevenness.push(+data[i]["肿瘤平滑度"]);
    tumourarea.push(+data[i]["肿瘤面积"]);
  }
  //xAxisWidth = d3.max(tumourgirth);
  xAxisWidth = d3.max(tumourid);
  yAxisWidth = d3.max(tumourarea);
  //dataset = arraymerging(tumourgirth,tumourarea);
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
  var xz=d3.range(569);
  console.log(xz);
  console.log(tumourid);
  var xScale = d3.scaleBand()
      .domain(tumourid)
      .rangeRound([2*padding,width-padding*2])
      .padding(8);

  var yScale = d3.scaleLinear()
      .domain([0,1.1*yAxisWidth])
      .range([height-padding,padding]);

  var xAxis = d3.axisBottom(xScale)
      .tickSize(0)
      .tickPadding(6)
      .tickValues(xScale.domain().filter(function(d,i){return !(i%10)}));
      
  var yAxis = d3.axisLeft(yScale).tickSize(0);
  
  function make_y_axis(){
    return d3.axisLeft(yScale);
  }

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
      .text("肿瘤面积");
  
  var rectpadding = 1;

  var rects = svg.selectAll("rect")
      .data(tumourarea)
      .enter()
      .append("rect")
      .attr("fill","red")
      .attr("transform","translate("+padding+","+padding+")")
      .attr("x",function(d,i){
        return xScale(i)+rectpadding/2;
      })
      .attr("y",function(d){
        return yScale(d);
      })
      .attr("width",rectpadding)
      .attr("height",function(d){
        return height-yScale(d)-2*padding;
      });
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
        return padding+xScale(d[0]);
      })
      .attr("cy",function(d){
        return yScale(d[1])+padding;
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
function arraymerging(arr1,arr2){
  var result=new Array();
  for(var i=0;i<arr1.length;i++){
    result.push([arr1[i],arr2[i]]);
  }
  return result;
}

function compare(value1,value2){
  if(value1>value2){
    return 1;
  }else if(value1<value2){
    return -1;
  }else{
    return 0;
  }
}