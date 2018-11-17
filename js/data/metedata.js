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
var gender = [];
var medicalhistory = [];
var self_inspect_character = [];
var chujian_character = [];
var w_transfer = [];
var initial_types = [];
var chemotherapymedicine = [];
var adverse_reaction = [];
var maxarea,maxgirth,maxevenness,
maxage,maxradius,maxtexture,maxdensity,
maxsunken,maxsunkencount,maxsymmetry,maxchemotherapy,dataset; 
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
      // console.log(data);
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
    tumourradius=[];
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
    gender =[];
    medicalhistory =[];
    self_inspect_character = [];
    chujian_character = [];
    w_transfer =[];
    initial_types =[];
    chemotherapymedicine = [];
    adverse_reaction = [];
    if(dataset){
      for(var i=0;i<dataset.length;i++){
        tumourid.push(+dataset[i]["ID "]);
        tumourproperty.push(dataset[i]["肿瘤性质"]);
        tumourgirth.push(+dataset[i]["肿瘤周长"]);
        tumourevenness.push(+dataset[i]["肿瘤平滑度"]);
        tumourarea.push(+dataset[i]["肿瘤面积"]);
        epoch.push(dataset[i]["不良反应出现时间"]);
        sunkencount.push(+dataset[i]["凹陷点数"]);
        fractaldimension.push(dataset[i]["分形维数"]);
        chemotherapyduration.push(+dataset[i]["化疗时长"]);
        symmetry.push(+dataset[i]["对称性"]);
        patientage.push(+dataset[i]["年龄"]);
        tumourradius.push(+dataset[i]["肿瘤半径"]);
        tumoursunken.push(+dataset[i]["肿瘤凹陷度"]);
        tumourdensity.push(+dataset[i]["肿瘤致密度"]);
        tumourtexture.push(+dataset[i]["肿瘤质地"]);
        selfinspection.push(dataset[i]["自检时间"]);
        gender.push(dataset[i]["性别"]);
        medicalhistory.push(dataset[i]["病史"]);
        self_inspect_character.push(dataset[i]["自检表征"]);
        chujian_character.push(dataset[i]["触检表征"]);
        w_transfer.push(dataset[i]["是否转移"]);
        initial_types.push(dataset[i]["初检分型"]);
        chemotherapymedicine.push(dataset[i]["化疗用药"]);
        adverse_reaction.push(dataset[i]["不良反应"]);
      }
    }
  maxarea = d3.max(tumourarea);
  maxgirth = d3.max(tumourgirth);
  maxevenness = d3.max(tumourevenness);
  maxage = d3.max(patientage);
  maxradius = d3.max(tumourradius);
  maxtexture = d3.max(tumourtexture);
  maxdensity = d3.max(tumourdensity);
  maxsunken = d3.max(tumoursunken);
  maxsunkencount = d3.max(sunkencount);
  maxsymmetry = d3.max(symmetry);
  maxchemotherapy = d3.max(chemotherapyduration);
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
  gender,medicalhistory,self_inspect_character,
  chujian_character,w_transfer,initial_types,
  chemotherapymedicine,adverse_reaction,
  dataset,readobjectarray,compare};