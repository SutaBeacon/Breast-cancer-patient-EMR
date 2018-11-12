var tumourid=[];
var tumourproperty=[];
var tumourgirth=[];
var tumourevenness=[];
var tumourarea = [];
var epoch=[];
var sunkencount=[];
var fractaldimension=[];
var chemotherapyduration=[];
var symmetry=[];
var patientage=[];
var tumoursunken=[];
var tumourradius=[];
var tumourdensity=[];
var tumourtexture=[];
var selfinspection=[];
var maxarea,maxgirth,maxevenness,dataset; 
if(!dataset){
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
      console.log(data);
      //xAxisWidth = d3.max(tumourevenness);
      //yAxisWidth = d3.max(tumourarea);
      //yAxisWidth = d3.max(tumourevenness);
      //drawscatter();
    // drawcolumn();
      //drawpie();
    });
}
    

var readobjectarray = function (dataset){
    tumourid=[];
    tumourproperty=[];
    tumourgirth=[];
    tumourevenness=[];
    tumourarea = [];
    epoch=[];
    sunkencount=[];
    fractaldimension=[];
    chemotherapyduration=[];
    symmetry=[];
    patientage=[];
    tumoursunken=[];
    tumourdensity=[];
    tumourtexture=[];
    selfinspection=[];
    if(dataset){
      for(var i=0;i<dataset.length;i++){
        tumourid.push(+dataset[i]["ID "]);
        tumourproperty.push(dataset[i]["肿瘤性质"]);
        tumourgirth.push(+dataset[i]["肿瘤周长"]);
        tumourevenness.push(+dataset[i]["肿瘤平滑度"]);
        tumourarea.push(+dataset[i]["肿瘤面积"]);
        epoch.push(dataset[i]["不良反应出现时间"]);
        sunkencount.push(dataset[i]["凹陷点数"]);
        fractaldimension.push(dataset[i]["分形维数"]);
        chemotherapyduration.push(dataset[i]["化疗时长（天）"]);
        symmetry.push(dataset[i]["对称性"]);
        patientage.push(dataset[i]["年龄"]);
        tumourradius.push(dataset[i]["肿瘤半径"]);
        tumoursunken.push(dataset[i]["肿瘤凹陷度"]);
        tumourdensity.push(dataset[i]["肿瘤致密度"]);
        tumourtexture.push(dataset[i]["肿瘤质地"]);
        selfinspection.push(dataset[i]["自检时间"]);
      }
    }
  maxarea = d3.max(tumourarea);
  maxgirth = d3.max(tumourgirth);
  maxevenness = d3.max(tumourevenness);
}
function compare(propertyname){
  return function(a,b){
    var value1 = +a[propertyname];
    var value2 = +b[propertyname];
    return value1-value2;
  }
}
export {tumourid,tumourarea,tumourgirth,
  tumourproperty,chemotherapyduration,
  tumourevenness,epoch,sunkencount,
  fractaldimension,symmetry,patientage,tumourradius,
  tumoursunken,tumourdensity,tumourtexture,
  maxarea,maxgirth,maxevenness,
  dataset,readobjectarray,compare};