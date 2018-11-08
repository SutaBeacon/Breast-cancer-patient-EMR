import  { drawlinechart }   from './src/linechart';
import  { drawareachart }  from './src/areachart';
import  { drawcolumn }  from './src/column';
import  {tumourarea,tumourgirth,
  tumourevenness,maxarea,maxgirth,maxevenness,dataset,readobjectarray} from './data/metedata';
var container = document.getElementById("selectedvariables");

/*
var x = document.getElementById("");
x.addEventListener("click",function(e){
  var target = e.target;
  if(target.id.toLowerCase()==="tumourid"){
      if(document.getElementById("xaxis") == null){
        var div = document.createElement("div");
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        div.innerText = "ID编号";
        container.appendChild(div);  
      }
  }
},false);
x.addEventListener("dblclick",function(e){
  var target =e.target;
  var element = document.getElementById("xaxis");
  if(target.id.toLowerCase()==="tumourid"){
      if((element !=null)&&(element.innerText == "ID编号")){
          container.removeChild(element);
      }
  }
},false);
x.addEventListener("mouseover",function(e){
  var target = e.target;
  if(target,id.toLowerCase() == "tumourid"){
    var 
  }
},false)*/
var variables =document.getElementById("variable");
variables.addEventListener("click",function(e){
  var target = e.target;
  var div = document.createElement("div");
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  readobjectarray();
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
          if(elementy.innerText == "肿瘤平滑度"){
            drawcolumn(maxevenness,"肿瘤平滑度");
          }else if(elementy.innerText == "肿瘤面积"){
            drawcolumn(maxarea,"肿瘤面积");
          }else if(elementy.innerText == "肿瘤周长"){
            drawcolumn(maxgirth,"肿瘤周长");
          }
        }
      }else if((elementx !=null)&&(elementx.innerText == "ID编号")){
        container.removeChild(elementx);
      }
      break;
    case "tumourevenness":
      div.innerText = "肿瘤平滑度";
      if((elementx == null)&&(elementy ==null)){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy ==null)&&(elementx.innerText != "肿瘤平滑度")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        if(elementx.innerText == "ID编号"){
          drawcolumn(maxevenness,"肿瘤平滑度");
        }else if(elementx.innerText == "肿瘤周长"){
          drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度","circle");
        }else if(elementx.innerText == "肿瘤面积"){
          drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度","circle");
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤平滑度")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        if(elementy.innerText == "肿瘤周长"){
          drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长","circle");
        }else if(elementy.innerText == "肿瘤面积"){
          drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积","circle");
        }
        break;
      }else if((elementy !=null)&&(elementy.innerText == "肿瘤平滑度")){
        container.removeChild(elementy);
        break;
      }else if((elementx !=null)&&(elementx.innerText == "肿瘤平滑度")){
        container.removeChild(elementx);
        break;
      }
      break;
    case "tumourgirth":
      div.innerText = "肿瘤周长";
      if((elementx == null)&&(elementy ==null)){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy ==null)&&(elementx.innerText != "肿瘤周长")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        if(elementx.innerText == "肿瘤平滑度"){
          drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长","circle");
        }else if(elementx.innerText == "肿瘤面积"){
          drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长","circle");
        }else if(elementx.innerText == "ID编号"){
          drawcolumn(maxgirth,"肿瘤周长");
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤周长")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        if(elementy.innerText == "肿瘤平滑度"){
          drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度","circle");
        }else if(elementy.innerText == "肿瘤面积"){
          drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积","circle");
        }
        break;
      }else if((elementy !=null)&&(elementy.innerText == "肿瘤周长")){
        container.removeChild(elementy);
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤周长")){
        container.removeChild(elementx);
        break;
      }
      break;
    case "tumourarea":
      div.innerText = "肿瘤面积";
      if((elementx == null)&&(elementy ==null)){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy ==null)&&(elementx.innerText != "肿瘤面积")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        if(elementx.innerText == "肿瘤平滑度"){
          drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积","circle");
        }else if(elementx.innerText == "肿瘤周长"){
          drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积","circle");
        }else if(elementx.innerText == "ID编号"){
          drawcolumn(maxarea,"肿瘤面积");
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤面积")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        if(elementy.innerText == "肿瘤平滑度"){
          drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度","circle");
        }else if(elementy.innerText == "肿瘤周长"){
          drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长","circle");
        }
        break;
      }else if((elementy != null)&&(elementy.innerText == "肿瘤面积")){
        container.removeChild(elementy);
        break;
      }else if((elementx !=null)&&(elementx.innerText == "肿瘤面积")){
        container.removeChild(elementx);
        break;
      }
      break;
  }
},false);
/*
variables.addEventListener("dblclick",function(e){
  var target = e.target;
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  switch(target.id.toLowerCase()){
    case "tumourid":
      if((elementx !=null)&&(elementx.innerText == "ID编号")){
        container.removeChild(elementx);
      }
      break;
    case "tumourevenness":
      if((elementy !=null)&&(elementy.innerText == "肿瘤平滑度")){
        container.removeChild(elementy);
      }
      if((elementx !=null)&&(elementx.innerText == "肿瘤平滑度")){
        container.removeChild(elementx);
      }
      break;
    case "tumourgirth":
      if((elementy !=null)&&(elementy.innerText == "肿瘤周长")){
        container.removeChild(elementy);
      }
      if((elementx != null)&&(elementx.innerText == "肿瘤周长")){
        container.removeChild(elementx);
      }
      break;
    case "tumourarea":
      if((elementy != null)&&(elementy.innerText == "肿瘤面积")){
        container.removeChild(elementy);
      }
      if((elementx !=null)&&(elementx.innerText == "肿瘤面积")){
        container.removeChild(elementx);
      }
      break;
  }
},false);*/
/*
variables.addEventListener("mouseover",function(e){
  var target = e.target;
  switch(target.id.toLowerCase()){
    case "tumourid":
    case "tumourevenness":
    case "tumourgirth":
    case "tumourarea":
      target.style.color="#fb3165";
      break;
  }
},false);
variables.addEventListener("mouseout",function(e){
  var target = e.target;
  switch(target.id.toLowerCase()){
    case "tumourid":
    case "tumourevenness":
    case "tumourgirth":
    case "tumourarea":
      target.style.color="black";
      break;
  }
},false);*/
/*
var setvariables = document.getElementById("variable");
var itemsvariables = setvariables.getElementsByTagName("li");
for(var i=0;i<itemsvariables.length;i++){
  itemsvariables[i].
}*/

var draw =document.getElementById("chartstyle");
draw.addEventListener("click",function(e){
  var target = e.target;
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  readobjectarray();
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
        switch(elementy.innerText){
          case "肿瘤平滑度":
            dataset.sort(compare("肿瘤平滑度"));
            readobjectarray();
            drawcolumn(maxevenness,"肿瘤平滑度");
            break;
          case "肿瘤面积":
            dataset.sort(compare("肿瘤面积"));
            readobjectarray();
            drawcolumn(maxarea,"肿瘤面积");
            break;
          case "肿瘤周长":
            dataset.sort(compare("肿瘤周长"));
            readobjectarray();
            drawcolumn(maxgirth,"肿瘤周长");
            break;
        }
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
        switch(elementx.innerText){
          case "肿瘤平滑度":
            switch(elementy.innerText){
              case "肿瘤面积":
                drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积","circle");
                break;
              case "肿瘤周长":
                drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长","circle");
            }
            break;
          case "肿瘤面积":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度","circle");
                break;
              case "肿瘤周长":
                drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长","circle");
                break;
            }
            break;
          case "肿瘤周长":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度","circle");
                break;
              case "肿瘤面积":
                drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积","circle");
                break;
            }
            break;
        }
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
        switch(elementx.innerText){
          case "肿瘤平滑度":
            switch(elementy.innerText){
              case "肿瘤面积":
                drawhollow(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积","circle");
                break;
              case "肿瘤周长":
                drawhollow(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长","circle");
            }
            break;
          case "肿瘤面积":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawhollow(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度","circle");
                break;
              case "肿瘤周长":
                drawhollow(maxarea,maxgirth,"肿瘤面积","肿瘤周长","circle");
                break;
            }
            break;
          case "肿瘤周长":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawhollow(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度","circle");
                break;
              case "肿瘤面积":
                drawhollow(maxgirth,maxarea,"肿瘤周长","肿瘤面积","circle");
                break;
            }
            break;
        }
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
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawlinechart(maxevenness,"肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawlinechart(maxgirth,"肿瘤周长","circle");
            break;
          case "肿瘤面积":
            drawlinechart(maxarea,"肿瘤面积","circle");
            break;
        }
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
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawareachart(maxevenness,"肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawareachart(maxgirth,"肿瘤周长","circle");
            break;
          case "肿瘤面积":
            drawareachart(maxarea,"肿瘤面积","circle");
            break;
        }
      }
      break;
  }
},false);
/*
draw.addEventListener("mouseover",function(e){
  var target = e.target;
  switch(target.id.toLowerCase()){
    case "barchart":
      var images = target.getElementsByTagName("img");
      images[0].src = "./images/条形2.png";
      var p = target.getElementsByTagName("p");
      p[0].style.color = "#fb3165";
      //target.style.color = "#fb3165";
      break;
    case "scatter":
      var images = target.getElementsByTagName("img");
      images[0].src = "./images/实点2.png";
      var p = target.getElementsByTagName("p");
      p[0].style.color = "#fb3165";
      break;
  }
},false);
draw.addEventListener("mouseout",function(e){
  var target = e.target;
  if(sentry == 0){
    switch(target.id.toLowerCase()){
    case "barchart":
      var images = target.getElementsByTagName("img");
      images[0].src = "./images/条形.png";
      var p = target.getElementsByTagName("p");
      p[0].style.color = "black";
      break;
    case "scatter":
      var images = target.getElementsByTagName("img");
      images[0].src = "./images/实点.png";
      var p = target.getElementsByTagName("p");
      p[0].style.color = "black";
      break;
    }
  }else{
    sentry = 0;
  }
},false);

var draw = document.getElementById("chart");
draw.addEventListener("click",function(e){
   var elementx =document.getElementById("xaxis");
   var elementy =document.getElementById("yaxis");
   if((elementx !=null)&&(elementy != null)){
     console.log("draw");
   }
},false);*/

function drawscatter(xAxisWidth,yAxisWidth,xstring,ystring,shape){
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
        if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
          d3.select("#tooltip")
            .select("#valuegirth")
            .text(d["肿瘤周长"]);
          d3.select("#namegirth").classed("hidden",false);
        }
        if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
          d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
          d3.select("#namearea").classed("hidden",false);
        }
        if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
          d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
          d3.select("#nameevenness").classed("hidden",false);
        }
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
      if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#namegirth").classed("hidden",false);
      }
      if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
        d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
        d3.select("#namearea").classed("hidden",false);
      }
      if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
        d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
        d3.select("#nameevenness").classed("hidden",false);
      }
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
      if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#namegirth").classed("hidden",false);
      }
      if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
        d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
        d3.select("#namearea").classed("hidden",false);
      }
      if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
        d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
        d3.select("#nameevenness").classed("hidden",false);
      }
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


function drawhollow(xAxisWidth,yAxisWidth,xstring,ystring,shape){
  var width=500;
  var height=500;
  var padding=20;
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
      if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#namegirth").classed("hidden",false);
      }
      if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
        d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
        d3.select("#namearea").classed("hidden",false);
      }
      if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
        d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
        d3.select("#nameevenness").classed("hidden",false);
      }
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
        if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
          d3.select("#tooltip")
            .select("#valuegirth")
            .text(d["肿瘤周长"]);
          d3.select("#namegirth").classed("hidden",false);
        }
        if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
          d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
          d3.select("#namearea").classed("hidden",false);
        }
        if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
          d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
          d3.select("#nameevenness").classed("hidden",false);
        }
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
      if((xstring == "肿瘤周长")||(ystring == "肿瘤周长")){
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#namegirth").classed("hidden",false);
      }
      if((xstring == "肿瘤面积")||(ystring == "肿瘤面积")){
        d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
        d3.select("#namearea").classed("hidden",false);
      }
      if((xstring == "肿瘤平滑度")||(ystring == "肿瘤平滑度")){
        d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
        d3.select("#nameevenness").classed("hidden",false);
      }
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
/*
function drawpie(){
    var pie = d3.pie();
    var width = 300;
    var height =300;
    var outerRadius =width/2;
    var innerRadius = 0;
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width",width)
        .attr("height",height);
    var arcs = svg.selectAll("g.arc")
        .data(pie(tumourarea))
        .enter()
        .append("g")
        .attr("class","src")
        .attr("transform","translate("+outerRadius+","+outerRadius+")");
    arcs.append("path")
        .attr("fill",function(d,i){
            return color(i);
        })
        .attr("d",arc)
        .on("mouseover",function(d){
            d3.select(this)
              .attr("fill","black");
            arcs.append("text")
              .attr("id","tooltip")
              .attr("transform",function(d){
                  return "translate("+arc.centroid(d)+")";
              })
              .attr("text-anchor","middle")
              .attr("font-family","sans-serif")
              .attr("font-size","11px")
              .attr("fill","black")
              .text(d.value);
            console.log(d.value);
          })
        .on("mouseout",function(){
            d3.select(this)
              .attr("fill",function(d,i){
                  return color(i);
              });
            arcs.select("#tooltip").remove();
          });
}*/
function compare(propertyname){
    return function(a,b){
      var value1 = +a[propertyname];
      var value2 = +b[propertyname];
      return value1-value2;
    }
}
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
          switch(elementy.innerText){
            case "肿瘤平滑度":
              drawlinechart(maxevenness,"肿瘤平滑度",shape);
              break;
            case "肿瘤周长":
              drawlinechart(maxgirth,"肿瘤周长",shape);
              break;
            case "肿瘤面积":
              drawlinechart(maxarea,"肿瘤面积",shape);
              break;
          }
        }else if(document.getElementById("patharea") != null){
          d3.select("svg").remove();
          switch(elementy.innerText){
            case "肿瘤平滑度":
              drawareachart(maxevenness,"肿瘤平滑度",shape);
              break;
            case "肿瘤周长":
              drawareachart(maxgirth,"肿瘤周长",shape);
              break;
            case "肿瘤面积":
              drawareachart(maxarea,"肿瘤面积",shape);
              break;
          }
        }
      }
      else if(document.getElementById("solid") != null){
          d3.select("svg").remove();
          switch(elementx.innerText){
            case "肿瘤平滑度":
              switch(elementy.innerText){
                case "肿瘤周长":
                  drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长",shape);
                  break;
                case "肿瘤面积":
                  drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积",shape);
                  break;
              }
              break;
            case "肿瘤周长":
              switch(elementy.innerText){
                case "肿瘤平滑度":
                  drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度",shape);
                  break;
                case "肿瘤面积":
                  drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积",shape);
                  break;
              }
              break;
            case "肿瘤面积":
              switch(elementy.innerText){
                case "肿瘤平滑度":
                  drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度",shape);
                  break;
                case "肿瘤周长":
                  drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长",shape);
              }
              break;
          }
        }else if(document.getElementById("hollow") != null){
          d3.select("svg").remove();
          switch(elementx.innerText){
            case "肿瘤平滑度":
              switch(elementy.innerText){
                case "肿瘤周长":
                  drawhollow(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长",shape);
                  break;
                case "肿瘤面积":
                  drawhollow(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积",shape);
                  break;
              }
              break;
            case "肿瘤周长":
              switch(elementy.innerText){
                case "肿瘤平滑度":
                  drawhollow(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度",shape);
                  break;
                case "肿瘤面积":
                  drawhollow(maxgirth,maxarea,"肿瘤周长","肿瘤面积",shape);
                  break;
              }
              break;
            case "肿瘤面积":
              switch(elementy.innerText){
                case "肿瘤平滑度":
                  drawhollow(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度",shape);
                  break;
                case "肿瘤周长":
                  drawhollow(maxarea,maxgirth,"肿瘤面积","肿瘤周长",shape);
              }
              break;
          }
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