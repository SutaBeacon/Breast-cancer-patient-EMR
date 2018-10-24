var x = document.getElementById("Dimension");
x.addEventListener("click",function(e){
  var target = e.target;
  if(target.id.toLowerCase()==="tumourid"){
      if(document.getElementById("xaxis") == null){
        var container =document.getElementById("selectedvariables");
        var div = document.createElement("div");
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        div.innerText = "ID";
        container.appendChild(div);  
      }
  }
},false);
x.addEventListener("dblclick",function(e){
  var target =e.target;
  if(target.id.toLowerCase()==="tumourid"){
      var container =document.getElementById("selectedvariables");
      var element = document.getElementById("xaxis");
      if(element !=null){
          container.removeChild(element);
      }
  }
},false);
var y =document.getElementById("Magnitude");
y.addEventListener("click",function(e){
  var target = e.target;
  var container = document.getElementById("selectedvariables");
  var div = document.createElement("div");
  switch(target.id.toLowerCase()){
      case "tumourevenness":
        if(document.getElementById("yaxis") == null){
            div.setAttribute("id","yaxis");
            
            break;
        }
        if(document.getElementById("xaxis") == null){

        }
        break;
      case "tumourgirth":
        
        break;
      case "tumourarea":
        
        break;
  }
},false);
d3.csv("./dataset.csv").then(function(data){
  tumourid=[];
  tumourproperty=[];
  tumourgirth=[];
  tumourevenness=[];
  tumourarea = [];
  data.sort(compare);
  for(var i=0;i<data.length;i++){
    tumourid.push(data[i]["ID "]);
    tumourproperty.push(data[i]["肿瘤性质"]);
    tumourgirth.push(+data[i]["肿瘤周长"]);
    tumourevenness.push(+data[i]["肿瘤平滑度"]);
    tumourarea.push(+data[i]["肿瘤面积"]);
  }
  dataset = data;
  //xAxisWidth = d3.max(tumourevenness);
  yAxisWidth = d3.max(tumourarea);
  //yAxisWidth = d3.max(tumourevenness);
  //drawscatter();
  drawcolumn();
  //drawpie();
});


function drawcolumn(){
  var width=700;
  var height=500;
  var padding=20;
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width",width)
      .attr("height",height);

  var xScale = d3.scaleBand()
      .domain(tumourid)
      .rangeRound([2*padding,width-padding*2]);

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

  svg.append("text")
      .attr("text-anchor","end")
      .attr("font-size",10)
      .attr("x",width-padding)
      .attr("y",height-2*padding)
      .text("肿瘤ID");
  
  svg.append("g")
      .attr("class","axis")
      .attr("transform","translate("+(2*padding)+",0)")
      .call(yAxis);
  svg.append("text")
      .attr("text-anchor","start")
      .attr("font-size",10)
      .attr("x",0)
      .attr("y",3*padding)
      .text("肿瘤面积");
  

  var rects = svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("fill","red")
      .attr("x",function(d){
        return xScale(d["ID "])+xScale.bandwidth()/2;
      })
      .attr("y",function(d){
        return yScale(d["肿瘤面积"]);
      })
      .attr("width",xScale.bandwidth())
      .attr("height",function(d){
        return height-yScale(d["肿瘤面积"])-3*padding;
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
          .attr("fill","red");
       // d3.select("#tooltip").remove();
        d3.select("#tooltip").classed("hidden",true);
      });
      /*
      .append("title")
      .text(function(d){
          return d["ID "];//why title didn't show in bar chart
      });*/
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
        return xScale(d["肿瘤平滑度"]);
      })
      .attr("cy",function(d){
        return yScale(d["肿瘤面积"]);
      })
      .attr("r",5)
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
          .attr("fill","red");
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
      .text("肿瘤平滑度");
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
function compare(a,b){
    if((+a["肿瘤面积"])<(+b["肿瘤面积"])){
        return -1;
    }else if((+a["肿瘤面积"])>(+b["肿瘤面积"])){
        return 1;
    }else{
        return 0;
    }
}