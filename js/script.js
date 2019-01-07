import  { drawlinechart }   from './src/linechart';
import  { drawareachart }  from './src/areachart';
import  { drawcolumn }  from './src/column';
import {drawscatter } from './src/scattersolid';
import {drawhollow} from './src/scatterhollow';
import {drawpie} from './src/pie';
import {drawchord} from './src/chorddiagram';
import  {dataset,readobjectarray} from './data/metedata';
import {drawicicle} from './src/icicle';
import { drawtidytree } from './src/tidytree';
import {drawsunburst} from './src/sunburst';

var container = document.getElementById("selectedvariables");

var variables =document.getElementById("variable");
variables.addEventListener("click",function(e){
  var target = e.target;
  var div = document.createElement("div");
  var elementx = document.getElementById("xaxis"); 
  var elementy = [];
  var elementx = [];
  var textelementx = [];
  var textelementy = [];
  for(var i=0;i<11;i++){
    elementx[i] = document.getElementById(`xaxis_${i}`);
    elementy[i] = document.getElementById(`yaxis_${i}`);
    if(elementx[i] != null){textelementx.push(elementx[i].innerText);}
    if(elementy[i] != null){textelementy.push(elementy[i].innerText);}
  }
  readobjectarray(dataset);
  switch(target.id.toLowerCase()){
    case "tumourid":
      if(d3.select("svg") != null){
        d3.select("svg").remove();
      }
      if(textelementx.length == 0){
        div.setAttribute("id","xaxis_0");
        div.className += "axisdimension";
        div.innerText = "ID编号";
        container.appendChild(div);
        // console.log(elementy.length);
        if(textelementy.length == 1){
          //drawsunburst();
          //drawicicle();
          //drawtidytree();
          drawcolumn();
          //console.log("column");
          //drawicicle();
        }else if(textelementy.length != 0){
          console.log("chord");
          drawchord();
        }
      }else if((textelementx.length != 0)&&(textelementx.indexOf("ID编号") != -1)){
        for(var i=0;i<10;i++){
          if((elementx[i] != null)&&(elementx[i].innerText == "ID编号")){
            container.removeChild(elementx[i]);
            break;
          }
        }
      }
      break;
    case "gender":
      xtododetails("性别");
      break;
    case "medicalhistory":
      xtododetails("病史");
      break;
    case "selfinspectcharacter":
      xtododetails("自检表征");
      break;
    case "chujiancharacter":
      xtododetails("触检表征");
      break;
    case "whethertransfer":
      xtododetails("是否转移");
      break;
    case "initialtypes":
      xtododetails("初检分型");
      break;
    case "chemotherapymedicine":
      xtododetails("化疗用药");
      break;
    case "adversereaction":
      xtododetails("不良反应");
      break;
    case "tumourproperty":
      xtododetails("肿瘤性质");
      break;
    case "tumourevenness":
      ytododetails("肿瘤平滑度");
      break;
    case "tumourgirth":
      ytododetails("肿瘤周长");
      break;
    case "tumourarea":
      ytododetails("肿瘤面积");
      break;
    case "age":
      ytododetails("年龄");
      break;
    case "chemotherapyduration":
      ytododetails("化疗时长");
      break;
    case "tumourradius":
      ytododetails("肿瘤半径");
      break;
    case "tumourtexture":
      ytododetails("肿瘤质地");
      break;
    case "tumourdensity":
      ytododetails("肿瘤致密度");
      break;
    case "tumoursunken":
      ytododetails("肿瘤凹陷度");
      break;
    case "sunkenpoint":
      ytododetails("凹陷点数");
      break;
    case "symmetry":
      ytododetails("对称性");
      break;
    }
  function xtododetails(s_todo){
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
    div.innerText = s_todo;
    if(textelementy.length == 0){
      if(textelementx.length == 0){
        div.setAttribute("id","xaxis_0");
        div.className += "axisdimension";
        container.appendChild(div);
        console.log("pie"); 
        drawpie();
      }else if((textelementx.indexOf(s_todo) == -1)&&(textelementx.indexOf("ID编号") == -1)){
        for(var i=0;i<10;i++){
          if(elementx[i] == null){
            div.setAttribute("id",`xaxis_${i}`);
            break;
          }
        }
        div.className += "axisdimension";
        container.appendChild(div);
        //console.log("tidytree");
        //drawtidytree();
        drawicicle();
      }
    }
    if(textelementx.indexOf(s_todo) != -1){
      for(var i=0;i<10;i++){
        if((elementx[i] != null)&&(elementx[i].innerText == s_todo)){
          container.removeChild(elementx[i]);
          break;
        }
      }
    }
  }
  function ytododetails(s_todo){
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
    div.innerText = s_todo;
    if(((textelementx.length == 0)||((textelementx.length == 1)&&(textelementx.indexOf("ID编号") != -1)))
    &&(textelementy.length == 0)){
      div.setAttribute("id","yaxis_0");
      div.className += "axismagnitude";
      container.appendChild(div);
      if((textelementx.length == 0)&&((s_todo == "年龄")||(s_todo == "化疗时长"))){
        //console.log("pie");
        drawpie();
      }else if(textelementx.length == 1){
        //console.log("column");
        drawcolumn();
      }
    }else if(((textelementx.length == 0)||((textelementx.length == 1)&&(textelementx.indexOf("ID编号") != -1)))
    &&(textelementy.indexOf(s_todo) == -1)){
      for(var i=0;i<11;i++){
        if(elementy[i] == null){
          div.setAttribute("id",`yaxis_${i}`);
          break;
        }
      }
      div.className += "axismagnitude";
      container.appendChild(div);
      if((textelementy.length == 1)&&(textelementx.length == 0)){
        //console.log("scatter");
        drawscatter("circle");
      }else {
        //console.log("chord");
        drawchord();
      }
    }else if(textelementy.indexOf(s_todo) != -1){
      for(var i=0;i<11;i++){
        if((elementy[i] != null)&&(elementy[i].innerText == s_todo)){
          container.removeChild(elementy[i]);
          break;
        }
      }
    }
  }
},false);




var draw =document.getElementById("chartstyle");
draw.addEventListener("click",function(e){
  var target = e.target;
  var elementx = [];
  var elementy = [];
  var textelementy = [];
  var textelementx = [];
  for(var i=0;i<11;i++){
    elementy[i] = document.getElementById(`yaxis_${i}`);
    elementx[i] = document.getElementById(`xaxis_${i}`);
    if(elementy[i] != null){textelementy.push(elementy[i].innerText);}
    if(elementx[i] != null){textelementx.push(elementx[i].innerText);}
  }
  readobjectarray(dataset);
  /* var p = draw.getElementsByTagName("p");
  var images =draw.getElementsByTagName("img");
 
  for(var i=0;i<p.length;i++){
    console.log(p[i].style.color);
    if(p[i].style.color == "rgb(251, 49, 101)"){
      break;
      console.log(i);
    }
  }
  console.log(i);
  if(i != p.length){
    p[i-1].style.color = "black";
    switch(i){
      case 1:
        images[0].src = "./images/条形.png";
        break;
      case 2:
        images[1].src = "./images/饼图.png";
        break;
      case 3:
        images[2].src = "./images/面积.png";
        break;
      case 4:
        images[3].src = "./images/折线.png";
        break;
      case 5:
        images[4].src = "./images/实点.png";
        break;
      case 6:
        images[5].src = "./images/空点.png";
        break;
      case 7:
        images[6].src = "./images/比重.png";
        break;
      case 8:
        images[7].src = "./images/甘特.png";
        break;
      case 9:
        images[8].src = "./images/中位.png";
        break;
      case 10:
        images[9].src = "./images/定点.png";
        break;
    }
  }*/
  switch(target.id.toLowerCase()){
    case "barchart":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length == 0)||(textelementy.length == 0)){
        alert("请选择完整的维度量度");
      }else if((textelementx.indexOf("ID编号") == -1)||(textelementy.length != 1)){
        alert("所选择的维度不适合条形图，请选择其他图表");
      }else{
        drawcolumn();
      }
      break;
    case "scattersolid":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length != 0)||(textelementy.length != 2)){
        alert("所选择的维度量度不适合散点图，请选择其他图表");
      }else{
        drawscatter("circle");
      }
      break;
    case "scatterhollow":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
    if((textelementx.length != 0)||(textelementy.length != 2)){
      alert("所选择的维度量度不适合散点图，请选择其他图表");
    }else{
      drawhollow("circle");
    }
      break;
    case "linechart":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length == 0)||(textelementy.length == 0)){
        alert("请选择完整的维度量度");
      }else if((textelementx.indexOf("ID编号") == -1)||(textelementy.length != 1)){
        alert("所选择的维度量度不适合折线图，请选择其他图表");
      }else {
        drawlinechart("circle");
      }
      break;
    case "areachart":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length == 0)||(textelementy.length == 0)){
        alert("请选择完整的维度量度");
      }else if((textelementx.indexOf("ID编号") == -1)||(textelementy.length != 1)){
        alert("所选择的维度量度不适合面积图，请选择其他图表");
      }else {
        drawareachart("circle");
      }
      break;
    case "chorddiagram":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementy.length < 1)||((textelementx.length > 0)&&(textelementx.indexOf("ID编号") == -1))){
        alert("请重新选择");
      }else{
        drawchord();
      }
      break;
    case "pie":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length == 0)&&(textelementy.length == 1)&&
      ((textelementy.indexOf("年龄") != -1)||(textelementy.indexOf("化疗时长") != -1))){
        drawpie();
      }else if((textelementx.length == 1)&&(textelementy.length == 0)&&(textelementx.indexOf("ID编号")== -1)){
        drawpie();
      }else {
        alert("请重新选择");
      }
      break;
    case "tidytree":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length > 1)&&(textelementx.indexOf("ID编号") == -1)&&(textelementy.length == 0)){
        drawtidytree();
      }else{
        alert("请重新选择");
      }
      break;
    case "icicle":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length > 1)&&(textelementx.indexOf("ID编号") == -1)&&(textelementy.length == 0)){
        drawicicle();
      }else{
        alert("请重新选择");
      }
      break;
    case "sunburst":
    if(d3.select("svg") != null){
      d3.select("svg").remove();
    }
      if((textelementx.length > 1)&&(textelementx.indexOf("ID编号") == -1)&&(textelementy.length == 0)){
        drawsunburst();
      }else{
        alert("请重新选择");
      }
      break;
  }
},false);


var variablestag = document.getElementById("variablesattributes");
variablestag.addEventListener("change",function(e){
  var target = e.target;
  var elementx = [];
  var elementy = [];
  var textelementx = [];
  var textelementy = [];
  for(var i=0;i<11;i++){
    elementy[i] = document.getElementById(`yaxis_${i}`);
    elementx[i] = document.getElementById(`xaxis_${i}`);
    if(elementx[i] != null){textelementx.push(elementx[i].innerText);}
    if(elementy[i] != null){textelementy.push(elementy[i].innerText);}
  }
  if(d3.select("svg")==null){
        alert("请先生成图表！");
  }
  if(((textelementx.length ==1)&&(textelementx.indexOf("ID编号") != -1)&&(textelementy.length == 1))||
    ((textelementx.length == 0)&&(textelementy.length == 2))){
    switch(target.id.toLowerCase()){
      case "variablescolor":
        var color = target.value;
        if(document.getElementById("pathline") != null){
          var pathlineattributes = document.getElementById("pathline");
          pathlineattributes.setAttribute("stroke",color);
        }
        if(document.getElementById("patharea") != null){
          var pathareaattributes = document.getElementById("patharea");
          pathareaattributes.setAttribute("stroke",color);
          pathareaattributes.setAttribute("fill",color);
        }
        if(document.getElementById("hollow") != null){
          if(document.getElementById("svgcircles") != null){
            d3.select("#svgcircles")
            .selectAll("circle")
            .attr("stroke",color);
          }else if(document.getElementById("svgrects") != null){
            d3.select("#svgrects")
            .selectAll("rect")
            .attr("stroke",color);
          }else if(document.getElementsByTagName("ellipse").length != 0){
            d3.select("#svgellipses")
            .selectAll("ellipse")
            .attr("stroke",color);
          }
        }else{
          if(document.getElementById("svgcircles") != null){
            d3.select("#svgcircles")
            .selectAll("circle")
            .attr("fill",color);
          }else if(document.getElementById("svgrects") != null){
            d3.select("#svgrects")
            .selectAll("rect")
            .attr("fill",color);
          }else if(document.getElementsByTagName("ellipse").length != 0){
            d3.select("#svgellipses")
            .selectAll("ellipse")
            .attr("fill",color);
          }
        }
        break;
      case "variablessize":
        var size = target.value;
        if(document.getElementById("column") != null){
            alert("条形图大小不可调！");
          }
        else{
          if(document.getElementById("svgcircles") != null){
            d3.select("#svgcircles")
            .selectAll("circle")
            .attr("r",size);
          }else if(document.getElementById("svgrects") != null){
            d3.select("#svgrects")
            .selectAll("rect")
            .attr("width",size)
            .attr("height",size);
          }else if(document.getElementById("svgellipses")){
            d3.select("#svgellipses")
            .selectAll("ellipse")
            .attr("rx",size)
            .attr("ry",size/2);
          }
        }
        break;
    }
  } 
},false);
variablestag.addEventListener("click",function(e){
  var target = e.target;
  var elementx = [];
  var elementy = [];
  var textelementy = [];
  var textelementx = [];
  for(var i=0;i<11;i++){
    elementx[i] = document.getElementById(`xaxis_${i}`);
    elementy[i] = document.getElementById(`yaxis_${i}`);
    if(elementx[i] != null){textelementx.push(elementx[i].innerText);}
    if(elementy[i] != null){textelementy.push(elementy[i].innerText);}
  }
  var shape;
  if(d3.select("svg") == null){
        alert("请先生成图表！");
  }
  if(((textelementx.length == 0)&&(textelementy.length == 2))||
    (textelementx.length == 1)&&(textelementx.indexOf("ID编号") != -1)&&(textelementy.length == 1)){
    switch(target.id.toLowerCase()){
      case "tabrect": 
        shape = "rect";
        break;
      case "tabellipse":
        shape = "ellipse";
        break;
      case "tabcircle":
        shape = "circle";
        break;
    //   case "tablable":
    //     var nowdata;
    //     if(elementy.innerText == "肿瘤平滑度"){
    //       nowdata = tumourevenness;
    //     }else if(elementy.innerText == "肿瘤周长"){
    //       nowdata = tumourgirth;
    //     }else if(elementy.innerText == "肿瘤面积"){
    //       nowdata  = tumourarea;
    //     }
    //     if(document.getElementById("svgrects") != null){
    //       var rects = document.getElementById("svgrects").getElementsByTagName("rect");
    //       for(var i=0;i<rects.length;i++){
    //         var xPosition = parseFloat(rects[i].getAttribute("x"));
    //         var yPosition = parseFloat(rects[i].getAttribute("y"));
    //         d3.select("svg")
    //         .append("g")
    //         .attr("id","variablelable")
    //         .append("text")
    //         .attr("x",xPosition)
    //         .attr("y",yPosition)
    //         .attr("text-anchor","middle")
    //         .attr("font-family","sans-serif")
    //         .attr("font-size","5px")
    //         .attr("fill","black")
    //         .text(nowdata[i]);
    //       }
    //     }else if(document.getElementById("svgcircles") != null){
    //       var circles = document.getElementById("svgcircles").getElementsByTagName("circle");
    //       for(var i=0;i<circles.length;i++){
    //         var xPosition = parseFloat(circles[i].getAttribute("cx"));
    //         var yPosition = parseFloat(circles[i].getAttribute("cy"));
    //         d3.select("svg")
    //         .append("g")
    //         .attr("id","variablelable")
    //         .append("text")
    //         .attr("x",xPosition)
    //         .attr("y",yPosition)
    //         .attr("text-anchor","middle")
    //         .attr("font-family","sans-serif")
    //         .attr("font-size","5px")
    //         .attr("fill","black")
    //         .text(nowdata[i]);
    //       }
    //     }else if(document.getElementById("svgellipses") != null){
    //       var ellipses =  document.getElementById("svgellipses").getElementsByTagName("ellipse");
    //       for(var i=0;i<ellipses.length;i++){
    //         var xPosition = parseFloat(ellipses[i].getAttribute("cx"));
    //         var yPosition = parseFloat(ellipses[i].getAttribute("cy"));
    //         d3.select("svg")
    //         .append("g")
    //         .attr("id","variablelable")
    //         .append("text")
    //         .attr("x",xPosition)
    //         .attr("y",yPosition)
    //         .attr("text-anchor","middle")
    //         .attr("font-family","sans-serif")
    //         .attr("font-size","5px")
    //         .attr("fill","black")
    //         .text(nowdata[i]);
    //       }
    //     }
    //     break;
    }
    if(shape != null){
        if(document.getElementById("column") != null){
          alert("条形图不支持调整形状！");
        }else if(document.getElementById("pathline") !=null){
          d3.select("svg").remove();
          drawlinechart(shape);
        }else if(document.getElementById("patharea") != null){
          d3.select("svg").remove();
          drawareachart(shape);
        }else if(document.getElementById("solid") != null){
          d3.select("svg").remove();
          drawscatter(shape);
        }else if(document.getElementById("hollow") != null){
          d3.select("svg").remove();
          drawhollow(shape);
        }
    } 
  }
},false);
var tools = document.getElementById("tools");
tools.addEventListener("click",function(e){
  var target = e.target;
  if(document.getElementsByTagName("svg").length == 0){
    alert("请先生成图表！");
  }else{
    var html = d3.select("svg")
      .attr("version",1.1)
      .attr("xmlns","http://www.w3.org/2000/svg")
      .node().parentNode.innerHTML;
    var canvas = document.createElement("canvas");
      canvas.width = d3.select("svg").attr("width");
      canvas.height = d3.select("svg").attr("height");
      var context = canvas.getContext("2d");
      var image = new Image();
      image.src = 'data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(html)));
    switch(target.id.toLowerCase()){
      case "exportsvg":
        var svgBlob = new Blob([html],{type:"image/svg+xml"});
        var svgUrl = URL.createObjectURL(svgBlob);
        target.href = svgUrl;
        target.download = "chart.svg";
        break;
      case "exportpng":
        image.onload = function(){
          context.drawImage(image,0,0);
          var canvasdata = canvas.toDataURL("image/png");
          target.download = "chart.png";
          target.href = canvasdata;
        };
        break;
      case "exportpdf":
      /*
        function SVG2PNG (svg,callback){
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          var data = svg.outerHTML;
          canvg(canvas,data);
          callback(canvas);
        }
        var element = document.getElementsByTagName("svg")[0];
        SVG2PNG(element, function(canvas){
          var img = canvas.toDataURL("image/png");
          var doc = new jsPDF('l','mm',[250,350]);
          doc.addImage(img,'PNG',0,0,350,250);
          doc.save('chart.pdf');
        });*/
        image.onload = function(){
          context.drawImage(image,0,0);
          var canvasdata = canvas.toDataURL("image/png");
          var doc = new jsPDF('l','mm',[250,350]);
          doc.addImage(canvasdata,'PNG',0,0,350,250);
          doc.save('chart.pdf');
        };
        break;
    }
  }
},false);
