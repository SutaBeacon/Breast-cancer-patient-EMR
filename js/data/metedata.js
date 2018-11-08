var tumourid=[];
var tumourproperty=[];
var tumourgirth=[];
var tumourevenness=[];
var tumourarea = [];
var maxarea,maxgirth,maxevenness,dataset;
d3.csv("./dataset.csv").then(function(data){
  /*
  tumourid=[];
  tumourproperty=[];
  tumourgirth=[];
  tumourevenness=[];
  tumourarea = [];
  //data.sort(compare);
  for(var i=0;i<data.length;i++){
    tumourid.push(data[i]["ID "]);
    tumourproperty.push(data[i]["肿瘤性质"]);
    tumourgirth.push(+data[i]["肿瘤周长"]);
    tumourevenness.push(+data[i]["肿瘤平滑度"]);
    tumourarea.push(+data[i]["肿瘤面积"]);
  }*/
  dataset = data;
  //xAxisWidth = d3.max(tumourevenness);
  //yAxisWidth = d3.max(tumourarea);
  //yAxisWidth = d3.max(tumourevenness);
  //drawscatter();
 // drawcolumn();
  //drawpie();
});

var readobjectarray = function (){
  for(var i=0;i<dataset.length;i++){
    tumourid.push(dataset[i]["ID "]);
    tumourproperty.push(dataset[i]["肿瘤性质"]);
    tumourgirth.push(+dataset[i]["肿瘤周长"]);
    tumourevenness.push(+dataset[i]["肿瘤平滑度"]);
    tumourarea.push(+dataset[i]["肿瘤面积"]);
  }
  maxarea = d3.max(tumourarea);
  maxgirth = d3.max(tumourgirth);
  maxevenness = d3.max(tumourevenness);
}
export {tumourid,tumourarea,tumourgirth,tumourevenness,maxarea,maxgirth,maxevenness,dataset,readobjectarray};