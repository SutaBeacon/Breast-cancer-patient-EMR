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
  switch(target.id.toLowerCase()){
    case "tumourid":
      if(elementx == null){
        var div = document.createElement("div");
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        div.innerText = "ID编号";
        container.appendChild(div);  
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
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤平滑度")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy !=null)&&(elementy.innerText == "肿瘤平滑度")){
        container.removeChild(elementy);
        break;
      }else if((elementx !=null)&&(elementx.innerText == "肿瘤平滑度")){
        container.removeChild(elementx);
        break;
      }
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
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤周长")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy !=null)&&(elementy.innerText == "肿瘤周长")){
        container.removeChild(elementy);
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤周长")){
        container.removeChild(elementx);
        break;
      }
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
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤面积")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy != null)&&(elementy.innerText == "肿瘤面积")){
        container.removeChild(elementy);
        break;
      }else if((elementx !=null)&&(elementx.innerText == "肿瘤面积")){
        container.removeChild(elementx);
        break;
      }
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
function readobjectarray(){
  tumourid=[];
  tumourproperty=[];
  tumourgirth=[];
  tumourevenness=[];
  tumourarea = [];
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
    case "scatter":
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
    case "hollow":
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
function drawlinechart(yAxisWidth,s,shape){
  var width = 700;
  var height = 500;
  var padding = 20;
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width",width)
      .attr("height",height);
   
  var xScale = d3.scalePoint()
      .domain(tumourid)
      .range([2*padding,width-2*padding]);
  var yScale = d3.scaleLinear()
      .domain([0,1.1*yAxisWidth])
      .range([height-3*padding,3*padding]);
  var xAxis = d3.axisBottom(xScale)
      .tickSize(0)
      .tickPadding(6)
      .tickValues(xScale.domain().filter(function(d,i){return !(i%10)}));
  var yAxis =d3.axisLeft(yScale).tickSize(0);
  function make_y_axis(){
    return d3.axisLeft(yScale);
  }
  svg.append("g")
      .attr("stroke","lightgray")
      .attr("stroke-opacity","0.1")
      .attr("shape-rendering","crispEdges")
      .call(make_y_axis()
        .tickSize(-width+4*padding,0,0)
        .tickFormat(""))
      .attr("transform","translate("+(2*padding)+",0)");
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate(0,"+(height-3*padding)+")")
      .call(xAxis)
      .selectAll("text")
      .attr("transform","rotate(90)"+"translate("+(1.4*padding)+(-padding)+")")
   d3.select(".axis").append("text")
      .attr("fill","black")
      .attr("text-anchor","end")
      .attr("font-size",10)
      .attr("x",width)
      .attr("y",padding)
      .text("肿瘤ID");
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate("+(2*padding)+",0)")
      .call(yAxis)
      .append("text")
      .attr("text-anchor","middle")
      .attr("font-size",10)
      .attr("fill","black")
      .attr("x",0)
      .attr("y",3*padding)
      .text(s);
  svg.selectAll("text")
      .attr("fill","black");
  var line = d3.line()
      .x(function(d){return xScale(d["ID "])})
      .y(function(d){return yScale(d[s])});
  svg.append("path")
      .datum(dataset)
      .attr("id","pathline")
      .attr("stroke",document.getElementById("variablescolor").value)
      .attr("fill","none")
      .attr("d",line);
  if(shape == "circle"){
    var g = svg.append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class","linecircle")
    .attr("cx",line.x())
    .attr("cy",line.y())
    .attr("r",document.getElementById("variablessize").value)
    .attr("fill",document.getElementById("variablescolor").value)
    .on("mouseover",function(d){
      d3.select(this)
        .attr("fill","black");
      var xPosition = parseFloat(d3.select(this).attr("cx"));
      var yPosition = parseFloat(d3.select(this).attr("cy"));
      d3.select("#tooltip")
        .style("left",xPosition+"px")
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }else if(shape == "rect"){
    var x =line.x();
    var y = line.y();
    console.log(x);
    console.log(y);
    var g = svg.append("g")
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d){
      return xScale(d["ID "]) - document.getElementById("variablessize").value/2;
    })
    .attr("y",function(d){
      return yScale(d[s]) - document.getElementById("variablessize").value/2;
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }else if(shape == "ellipse"){
    var g = svg.append("g")
    .selectAll("ellipse")
    .data(dataset)
    .enter()
    .append("ellipse")
    .attr("cx",line.x())
    .attr("cy",line.y())
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }
  
}

function drawareachart(yAxisWidth,s,shape){
  var width = 700;
  var height = 500;
  var padding = 20;
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width",width)
      .attr("height",height);
   
  var xScale = d3.scalePoint()
      .domain(tumourid)
      .range([2*padding,width-2*padding]);
  var yScale = d3.scaleLinear()
      .domain([0,1.1*yAxisWidth])
      .range([height-3*padding,3*padding]);
  var xAxis = d3.axisBottom(xScale)
      .tickSize(0)
      .tickPadding(6)
      .tickValues(xScale.domain().filter(function(d,i){return !(i%10)}));
  var yAxis =d3.axisLeft(yScale).tickSize(0);
  function make_y_axis(){
    return d3.axisLeft(yScale);
  }
  svg.append("g")
      .attr("stroke","lightgray")
      .attr("stroke-opacity","0.1")
      .attr("shape-rendering","crispEdges")
      .call(make_y_axis()
        .tickSize(-width+4*padding,0,0)
        .tickFormat(""))
      .attr("transform","translate("+(2*padding)+",0)");
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate(0,"+(height-3*padding)+")")
      .call(xAxis)
      .selectAll("text")
      .attr("transform","rotate(90)"+"translate("+(1.4*padding)+(-padding)+")");
   d3.select(".axis").append("text")
      .attr("fill","black")
      .attr("text-anchor","end")
      .attr("font-size",10)
      .attr("x",width)
      .attr("y",padding)
      .text("肿瘤ID");
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate("+(2*padding)+",0)")
      .call(yAxis)
      .append("text")
      .attr("text-anchor","middle")
      .attr("font-size",10)
      .attr("fill","black")
      .attr("x",0)
      .attr("y",3*padding)
      .text(s);
  svg.selectAll("text")
      .attr("fill","black");
  var area = d3.area()
      .x(function(d){return xScale(d["ID "])})
      .y0(function(){return yScale.range()[0];})
      .y1(function(d){return yScale(d[s])});
  svg.append("path")
      .datum(dataset)
      .attr("id","patharea")
      .attr("stroke",document.getElementById("variablescolor").value)
      .attr("fill",document.getElementById("variablescolor").value)
      .attr("d",area);
  if(shape == "circle"){
    var g = svg.append("g")
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class","linecircle")
      .attr("cx",area.x())
      .attr("cy",area.y1())
      .attr("r",document.getElementById("variablessize").value)
      .attr("fill",document.getElementById("variablescolor").value)
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("cx"));
        var yPosition = parseFloat(d3.select(this).attr("cy"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px")
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#tooltip")
          .select("#valueproperty")
          .text(d["肿瘤性质"]);
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
        d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
        d3.select("#tooltip").classed("hidden",false);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("fill",document.getElementById("variablescolor").value);
        d3.select("#tooltip").classed("hidden",true);
      });
  }else if(shape == "ellipse"){
    var g = svg.append("g")
    .selectAll("ellipse")
    .data(dataset)
    .enter()
    .append("ellipse")
    .attr("cx",area.x())
    .attr("cy",area.y1())
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }else if(shape == "rect"){
    var g = svg.append("g")
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d){
      return xScale(d["ID "]) - document.getElementById("variablessize").value/2;
    })
    .attr("y",function(d){
      return yScale(d[s]) - document.getElementById("variablessize").value/2;
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }
  
}

function drawcolumn(yAxisWidth,s){
  var width=700;
  var height=500;
  var padding=20;
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width",width)
      .attr("height",height);

  var xScale = d3.scaleBand()
      .domain(tumourid)
      .rangeRound([2*padding,width-2*padding]);

  var yScale = d3.scaleLinear()
      .domain([0,1.1*yAxisWidth])
      .range([height-3*padding,3*padding]);

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
      .attr("stroke","lightgray")
      .attr("stroke-opacity","0.1")
      .attr("shape-rendering","crispEdges")
      .call(make_y_axis()
       .tickSize(-width+4*padding,0,0)
       .tickFormat(""))
      .attr("transform","translate("+(2*padding)+",0)");

  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate(0,"+(height-3*padding)+")")
      .call(xAxis)
      .selectAll("text")
      .attr("transform","rotate(90)"+"translate("+(1.4*padding)+",0)")
  d3.select(".axis").append("text")
      .attr("fill","black")
      .attr("text-anchor","end")
      .attr("font-size",10)
      .attr("x",width-padding)
      .attr("y",padding)
      .text("肿瘤ID");
  
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate("+(2*padding)+",0)")
      .call(yAxis)
      .append("text")
      .attr("text-anchor","middle")
      .attr("font-size",10)
      .attr("fill","black")
      .attr("x",0)
      .attr("y",3*padding)
      .text(s);
  
  svg.selectAll("text")
      .attr("fill","black");
  var rects = svg.append("g")
      .attr("id","rects")
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("fill",document.getElementById("variablescolor").value)
      .attr("x",function(d){
        return xScale(d["ID "])+xScale.bandwidth()/2;
      })
      .attr("y",function(d){
        return yScale(d[s]);
      })
      .attr("width",xScale.bandwidth())
      .attr("height",function(d){
        return height-yScale(d[s])-3*padding;
      })
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("x"))+20;
        var yPosition = parseFloat(d3.select(this).attr("y"))+20;
        
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
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#tooltip")
          .select("#valueproperty")
          .text(d["肿瘤性质"]);
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
        d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
        d3.select("#tooltip").classed("hidden",false);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("fill",document.getElementById("variablescolor").value);
       // d3.select("#tooltip").remove();
        d3.select("#tooltip").classed("hidden",true);
      });
      /*
      .append("title")
      .text(function(d){
          return d["ID "];//why title didn't show in bar chart
      });*/
}


function drawscatter(xAxisWidth,yAxisWidth,xstring,ystring,shape){
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
  if(shape == "circle"){
    var circle=svg.append("g")
      .attr("id","solid")
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
      .on("mouseover",function(d){
        d3.select(this)
          .attr("fill","black");
        var xPosition = parseFloat(d3.select(this).attr("cx"));
        var yPosition = parseFloat(d3.select(this).attr("cy"));
        d3.select("#tooltip")
          .style("left",xPosition+"px")
          .style("top",yPosition+"px")
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#tooltip")
          .select("#valueproperty")
          .text(d["肿瘤性质"]);
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
        d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
        d3.select("#tooltip").classed("hidden",false);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("fill",document.getElementById("variablescolor").value);
        d3.select("#tooltip").classed("hidden",true);
      });
  }else if(shape == "rect"){
    var g = svg.append("g")
    .attr("id","solid")
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }else if(shape == "ellipse"){
    var g = svg.append("g")
    .attr("id","solid")
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("fill",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
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


function drawhollow(xAxisWidth,yAxisWidth,xstring,ystring,shape){
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
  if(shape == "circle"){
    var circle=svg.append("g")
    .attr("id","hollow")
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("stroke",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
    });
  }else if(shape == "rect"){
    var circle=svg.append("g")
      .attr("id","hollow")
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
          .style("top",yPosition+"px")
          .select("#valueid")
          .text(d["ID "]);
        d3.select("#tooltip")
          .select("#valueproperty")
          .text(d["肿瘤性质"]);
        d3.select("#tooltip")
          .select("#valuegirth")
          .text(d["肿瘤周长"]);
        d3.select("#tooltip")
          .select("#valuearea")
          .text(d["肿瘤面积"]);
        d3.select("#tooltip")
          .select("#valueevenness")
          .text(d["肿瘤平滑度"]);
        d3.select("#tooltip").classed("hidden",false);
      })
      .on("mouseout",function(){
        d3.select(this)
          .attr("stroke",document.getElementById("variablescolor").value);
        d3.select("#tooltip").classed("hidden",true);
      });
  }else if(shape == "ellipse"){
    var circle=svg.append("g")
    .attr("id","hollow")
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
        .style("top",yPosition+"px")
        .select("#valueid")
        .text(d["ID "]);
      d3.select("#tooltip")
        .select("#valueproperty")
        .text(d["肿瘤性质"]);
      d3.select("#tooltip")
        .select("#valuegirth")
        .text(d["肿瘤周长"]);
      d3.select("#tooltip")
        .select("#valuearea")
        .text(d["肿瘤面积"]);
      d3.select("#tooltip")
        .select("#valueevenness")
        .text(d["肿瘤平滑度"]);
      d3.select("#tooltip").classed("hidden",false);
    })
    .on("mouseout",function(){
      d3.select(this)
        .attr("stroke",document.getElementById("variablescolor").value);
      d3.select("#tooltip").classed("hidden",true);
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
        if(elementx.innerText == "ID编号"){
          if(document.getElementById("rects") != null){
            d3.select("svg")
              .selectAll("rect")
              .attr("fill",color);
          /* var rects = document.getElementsByTagName("rect");
            for(var i=0;i<rects.length;i++){
              rects[i].setAttribute("fill",color)
            }*/
          }else if(document.getElementById("pathline") != null){
            var pathlineattributes = document.getElementById("pathline");
            pathlineattributes.setAttribute("stroke",color);
            if(document.getElementsByTagName("circle").length != 0){
              d3.select("svg")
              .selectAll("circle")
              .attr("fill",color);
            }else if(document.getElementsByTagName("rect").length != 0){
              d3.select("svg")
              .selectAll("rect")
              .attr("fill",color);
            }else if(document.getElementsByTagName("ellipse").length != 0){
              d3.select("svg")
              .selectAll("ellipse")
              .attr("fill",color);
            }
          }else if(document.getElementById("patharea") != null){
            var pathareaattributes = document.getElementById("patharea");
            pathareaattributes.setAttribute("stroke",color);
            pathareaattributes.setAttribute("fill",color);
            if(document.getElementsByTagName("circle").length != 0){
              d3.select("svg")
              .selectAll("circle")
              .attr("fill",color);
            }else if(document.getElementsByTagName("rect").length != 0){
              d3.select("svg")
              .selectAll("rect")
              .attr("fill",color);
            }else if(document.getElementsByTagName("ellipse").length != 0){
              d3.select("svg")
              .selectAll("ellipse")
              .attr("fill",color);
            }
          }
          break;
        }else if(document.getElementById("solid") != null){
          if(document.getElementsByTagName("circle").length != 0){
            d3.select("svg")
            .selectAll("circle")
            .attr("fill",color);
          }else if(document.getElementsByTagName("rect").length != 0){
            d3.select("svg")
            .selectAll("rect")
            .attr("fill",color);
          }else if(document.getElementsByTagName("ellipse").length != 0){
            d3.select("svg")
            .selectAll("ellipse")
            .attr("fill",color);
          }
          break;
        }else if(document.getElementById("hollow") != null){
          if(document.getElementsByTagName("circle").length != 0){
            d3.select("svg")
            .selectAll("circle")
            .attr("stroke",color);
          }else if(document.getElementsByTagName("rect").length != 0){
            d3.select("svg")
            .selectAll("rect")
            .attr("stroke",color);
          }else if(document.getElementsByTagName("ellipse").length != 0){
            d3.select("svg")
            .selectAll("ellipse")
            .attr("stroke",color);
          }
          break;
        }
        break;
      case "variablessize":
        var size = target.value;
        if((elementx.innerText == "ID编号")&&(document.getElementById("rects") != null)){
            alert("条形图大小不可调！");
          }
        else{
          if(document.getElementsByTagName("circle").length != 0){
            d3.select("svg")
            .selectAll("circle")
            .attr("r",size);
          }else if(document.getElementsByTagName("rect").length != 0){
            d3.select("svg")
            .selectAll("rect")
            .attr("width",size)
            .attr("height",size);
          }else if(document.getElementsByTagName("ellipse").length != 0){
            d3.select("svg")
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
        if(document.getElementsByTagName("rect").length != 0){
          var rects = document.getElementsByTagName("rect");
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
        }else if(document.getElementsByTagName("circle").length != 0){
          var circles = document.getElementsByTagName("circle");
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
        }else if(document.getElementsByTagName("ellipse").length != 0){
          var ellipses =  document.getElementsByTagName("ellipse");
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
        if(document.getElementById("rects") != null){
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