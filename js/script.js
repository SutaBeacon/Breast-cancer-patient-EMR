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
  xAxisWidth = d3.max(tumourgirth);
  yAxisWidth = d3.max(tumourarea);
  dataset = arraymerging(tumourgirth,tumourarea);
  draw();
});
function draw(){
  var width=500;
  var height=500;
  var padding=20;
  var svg = d3.select('#chart')
      .append('svg')
      .attr('width',width)
      .attr('height',height)

  var xScale = d3.scaleLinear()
      .domain([0,xAxisWidth])
      .range([0,width-padding*2]);

  var yScale = d3.scaleLinear()
      .domain([0,yAxisWidth])
      .range([height-padding,padding]);

  var rScale = d3.scaleLinear()
      .domain([0,yAxisWidth])
      .range([2,4]);

  var circle=svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('fill','red')
      .attr('cx',function(d){
        return padding+xScale(xAxisWidth);
      })
      .attr('cy',function(d){
        return yScale(yAxisWidth)+padding;
      })
      .attr('r',5);

  var xAxis = d3.axisBottom(xScale);
      

  var yAxis = d3.axisLeft(yScale);
  
  svg.append('g')
      .attr('class','axis')
      .attr('transform','translate(0,'+(height-padding)+')')
      .call(xAxis);
  
  svg.append('g')
      .attr('class','axis')
      .attr('transform','transplate('+padding+',0)')
      .call(yAxis);
      
}

function arraymerging(arr1,arr2){
  var result=new Array();
  for(var i=0;i<arr1.length;i++){
    result.push([arr1[i],arr2[i]]);
  }
  return result;
}
