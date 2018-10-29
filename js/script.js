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
}
var draw =document.getElementById("chartstyle");
draw.addEventListener("click",function(e){
  var target = e.target;
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
  readobjectarray();
  var maxarea = d3.max(tumourarea);
  var maxgirth = d3.max(tumourgirth);
  var maxevenness = d3.max(tumourevenness);
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
                drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积");
                break;
              case "肿瘤周长":
                drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长");
            }
            break;
          case "肿瘤面积":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度");
                break;
              case "肿瘤周长":
                drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长");
                break;
            }
            break;
          case "肿瘤周长":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度");
                break;
              case "肿瘤面积":
                drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积");
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
                drawhollow(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积");
                break;
              case "肿瘤周长":
                drawhollow(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长");
            }
            break;
          case "肿瘤面积":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawhollow(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度");
                break;
              case "肿瘤周长":
                drawhollow(maxarea,maxgirth,"肿瘤面积","肿瘤周长");
                break;
            }
            break;
          case "肿瘤周长":
            switch(elementy.innerText){
              case "肿瘤平滑度":
                drawhollow(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度");
                break;
              case "肿瘤面积":
                drawhollow(maxgirth,maxarea,"肿瘤周长","肿瘤面积");
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
            drawlinechart(maxevenness,"肿瘤平滑度");
            break;
          case "肿瘤周长":
            drawlinechart(maxgirth,"肿瘤周长");
            break;
          case "肿瘤面积":
            drawlinechart(maxarea,"肿瘤面积");
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
            drawareachart(maxevenness,"肿瘤平滑度");
            break;
          case "肿瘤周长":
            drawareachart(maxgirth,"肿瘤周长");
            break;
          case "肿瘤面积":
            drawareachart(maxarea,"肿瘤面积");
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
function drawlinechart(yAxisWidth,s){
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
      .attr("class","grid")
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
  var line = d3.line()
      .x(function(d){return xScale(d["ID "])})
      .y(function(d){return yScale(d[s])});
  svg.append("path")
      .datum(dataset)
      .attr("id","pathline")
      .attr("stroke",document.getElementById("variablescolor").value)
      .attr("fill","none")
      .attr("d",line);
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
}

function drawareachart(yAxisWidth,s){
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
      .attr("class","grid")
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
      .attr("class","grid")
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


function drawscatter(xAxisWidth,yAxisWidth,xstring,ystring){
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
}


function drawhollow(xAxisWidth,yAxisWidth,xstring,ystring){
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
            d3.select("svg")
              .selectAll("circle")
              .attr("fill",color);
          }else if(document.getElementById("patharea") != null){
            var pathareaattributes = document.getElementById("patharea");
            pathareaattributes.setAttribute("stroke",color);
            pathareaattributes.setAttribute("fill",color);
            d3.select("svg")
              .selectAll("circle")
              .attr("fill",color);
          }
          break;
        }else if(document.getElementById("solid") != null){
          d3.select("svg")
            .selectAll("circle")
            .attr("fill",color);
          break;
        }else if(document.getElementById("hollow") != null){
          d3.select("svg")
            .selectAll("circle")
            .attr("stroke",color);
          break;
        }
        break;
      case "variablessize":
        var size = target.value;
        if(elementx.innerText == "ID编号"){
          if(document.getElementById("rects") != null ){
            alert("条形图大小不可调！");
          }
          else if(document.getElementById("pathline") != null){
            d3.select("svg")
              .selectAll("circle")
              .attr("r",size);
          }else if(document.getElementById("patharea") != null){
            d3.select("svg")
              .selectAll("circle")
              .attr("r",size);
          }
          break;
        }else if(document.getElementById("solid") != null){
          d3.select("svg")
            .selectAll("circle")
            .attr("r",size);
          break;
        }else if(document.getElementById("hollow") != null){
          d3.select("svg")
            .selectAll("circle")
            .attr("r",size);
          break;
        }
        break;
    }
  } 
},false);