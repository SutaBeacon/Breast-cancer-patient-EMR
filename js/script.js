import  { drawlinechart }   from './src/linechart';
import  { drawareachart }  from './src/areachart';
import  { drawcolumn }  from './src/column';
import {drawscatter } from './src/scattersolid';
import {drawhollow} from './src/scatterhollow';
import {drawpie} from './src/pie';
import {drawchord} from './src/chorddiagram';
import  {tumourarea,tumourgirth,
  tumourevenness,
  dataset,readobjectarray} from './data/metedata';

var container = document.getElementById("selectedvariables");

var variables =document.getElementById("variable");
variables.addEventListener("click",function(e){
  var target = e.target;
  var div = document.createElement("div");
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  var elementy_1 = document.getElementById("yaxis_1");
  var elementy_2 = document.getElementById("yaxis_2");
  var elementy_3 = document.getElementById("yaxis_3");
  var elementy_4 = document.getElementById("yaxis_4");
  var elementy_5 = document.getElementById("yaxis_5");
  var elementy_6 = document.getElementById("yaxis_6");
  var elementy_7 = document.getElementById("yaxis_7");
  readobjectarray(dataset);
  switch(target.id.toLowerCase()){
    case "tumourid":
      if(elementx == null){
        var div = document.createElement("div");
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        div.innerText = "ID编号";
        container.appendChild(div);
        if(elementy != null){
          if(d3.select("svg") != null){
            d3.select("svg").remove();
          }
          drawcolumn();
        }
      }else if((elementx !=null)&&(elementx.innerText == "ID编号")){
        container.removeChild(elementx);
      }
      break;
    case "tumourevenness":
      tododetails("肿瘤平滑度");
      break;
    case "tumourgirth":
      tododetails("肿瘤周长");
      break;
    case "tumourarea":
      tododetails("肿瘤面积");
      break;
    
    case "tumourproperty":
      div.innerText = "肿瘤性质";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawpie("肿瘤性质");
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤性质")){
        container.removeChild(elementx);
        break;
      }
      break;
    case "age":
      tododetails("年龄");
      break;
    case "chemotherapyduration":
      tododetails("化疗时长");
      break;
    case "tumourradius":
      tododetails("肿瘤半径");
      break;
    case "tumourtexture":
      tododetails("肿瘤质地");
      break;
    case "tumourdensity":
      tododetails("肿瘤致密度");
      break;
    case "tumoursunken":
      tododetails("肿瘤凹陷度");
      break;
    case "sunkenpoint":
      tododetails("凹陷点数");
      break;
    case "symmetry":
      tododetails("对称性");
      break;
    }
  function tododetails(s_todo){
    div.innerText = s_todo;
    if((elementx == null)&&(elementy == null)){
      div.setAttribute("id","xaxis");
      div.className += "axisdimension";
      container.appendChild(div);
      if((s_todo == "化疗时长")||(s_todo == "年龄")){
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawpie(s_todo);
      }
    }else if((elementy == null)&&(elementx.innerText != s_todo)&&
    (elementx.innerText != "肿瘤性质")){
      div.setAttribute("id","yaxis");
      div.className +="axismagnitude";
      container.appendChild(div);
      if(d3.select("svg") != null){
        d3.select("svg").remove();
      }
      if(elementx.innerText == "ID编号"){
        drawcolumn();
      }else{
        drawscatter("circle");
      }
    }else if((elementx == null)&&(elementy.innerText != s_todo)){
      div.setAttribute("id","xaxis");
      div.className +="axisdimension";
      container.appendChild(div);
      if(d3.select("svg") != null){
        d3.select("svg").remove();
      }
      drawscatter("circle");
    }else if((elementx != null)&&(elementx.innerText == s_todo)){
      container.removeChild(elementx);
    }else if((elementy != null)&&(elementy.innerText == s_todo)){
      container.removeChild(elementy);
    }
  }
},false);




var draw =document.getElementById("chartstyle");
draw.addEventListener("click",function(e){
  var target = e.target;
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
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
      if((elementx == null)||(elementy == null)){
        alert("请选择完整的维度量度");
      }else if(elementx.innerText !== "ID编号"){
        alert("所选择的维度不适合条形图，请选择其他图表");
      }else{
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawcolumn();
      }
      break;
    case "scattersolid":
      if((elementx == null)||(elementy == null)){
        alert("请选择完整的维度量度");
      }else if((elementx.innerText == "ID编号")||(elementy.innerText == "ID编号")){
        alert("所选择的维度量度不适合散点图，请选择其他图表");
      }else{
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawscatter("circle");
      }
      break;
    case "scatterhollow":
      if((elementx == null)||(elementy == null)){
        alert("请选择完整的维度量度");
      }else if((elementx.innerText == "ID编号")||(elementy.innerText == "ID编号")){
        alert("所选择的维度量度不适合散点图，请选择其他图表");
      }else{
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawhollow("circle");
      }
      break;
    case "linechart":
      if((elementx == null)||(elementy == null)){
        alert("请选择完整的维度量度");
      }else if(elementx.innerText !="ID编号"){
        alert("所选择的维度量度不适合折线图，请选择其他图表");
      }else {
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawlinechart("circle");
      }
      break;
    case "areachart":
      if((elementx == null)||(elementy == null)){
        alert("请选择完整的维度量度");
      }else if(elementx.innerText !="ID编号"){
        alert("所选择的维度量度不适合面积图，请选择其他图表");
      }else {
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawareachart("circle");
      }
      break;
    case "chorddiagram":
      if(d3.select("svg") != null){
        d3.select("svg").remove();
      }
      drawchord();
  }
},false);


var variablestag = document.getElementById("variablesattributes");
variablestag.addEventListener("change",function(e){
  var target = e.target;
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  if((elementx == null)||(elementy == null)||(document.getElementsByTagName("svg").length == 0)){
        alert("请先生成图表！");
  }else{
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
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  var shape;
  if((elementx == null)||(elementy == null)||(document.getElementsByTagName("svg").length == 0)){
        alert("请先生成图表！");
  }else{
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
      case "tablable":
        var nowdata;
        if(elementy.innerText == "肿瘤平滑度"){
          nowdata = tumourevenness;
        }else if(elementy.innerText == "肿瘤周长"){
          nowdata = tumourgirth;
        }else if(elementy.innerText == "肿瘤面积"){
          nowdata  = tumourarea;
        }
        if(document.getElementById("svgrects") != null){
          var rects = document.getElementById("svgrects").getElementsByTagName("rect");
          for(var i=0;i<rects.length;i++){
            var xPosition = parseFloat(rects[i].getAttribute("x"));
            var yPosition = parseFloat(rects[i].getAttribute("y"));
            d3.select("svg")
            .append("g")
            .attr("id","variablelable")
            .append("text")
            .attr("x",xPosition)
            .attr("y",yPosition)
            .attr("text-anchor","middle")
            .attr("font-family","sans-serif")
            .attr("font-size","5px")
            .attr("fill","black")
            .text(nowdata[i]);
          }
        }else if(document.getElementById("svgcircles") != null){
          var circles = document.getElementById("svgcircles").getElementsByTagName("circle");
          for(var i=0;i<circles.length;i++){
            var xPosition = parseFloat(circles[i].getAttribute("cx"));
            var yPosition = parseFloat(circles[i].getAttribute("cy"));
            d3.select("svg")
            .append("g")
            .attr("id","variablelable")
            .append("text")
            .attr("x",xPosition)
            .attr("y",yPosition)
            .attr("text-anchor","middle")
            .attr("font-family","sans-serif")
            .attr("font-size","5px")
            .attr("fill","black")
            .text(nowdata[i]);
          }
        }else if(document.getElementById("svgellipses") != null){
          var ellipses =  document.getElementById("svgellipses").getElementsByTagName("ellipse");
          for(var i=0;i<ellipses.length;i++){
            var xPosition = parseFloat(ellipses[i].getAttribute("cx"));
            var yPosition = parseFloat(ellipses[i].getAttribute("cy"));
            d3.select("svg")
            .append("g")
            .attr("id","variablelable")
            .append("text")
            .attr("x",xPosition)
            .attr("y",yPosition)
            .attr("text-anchor","middle")
            .attr("font-family","sans-serif")
            .attr("font-size","5px")
            .attr("fill","black")
            .text(nowdata[i]);
          }
        }
        break;
    }
    if(shape != null){
      if(elementx.innerText == "ID编号"){
        if(document.getElementById("column") != null){
          alert("条形图不支持调整形状！");
        }else if(document.getElementById("pathline") !=null){
          d3.select("svg").remove();
          drawlinechart(shape);
        }else if(document.getElementById("patharea") != null){
          d3.select("svg").remove();
          drawareachart(shape);
        }
      }
      else if(document.getElementById("solid") != null){
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
