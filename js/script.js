import  { drawlinechart }   from './src/linechart';
import  { drawareachart }  from './src/areachart';
import  { drawcolumn }  from './src/column';
import {drawscatter } from './src/scattersolid';
import {drawhollow} from './src/scatterhollow';
import {drawpie} from './src/pie';
import  {tumourid,tumourarea,tumourgirth,
  tumourproperty,chemotherapyduration,
  tumourevenness,epoch,sunkencount,
  fractaldimension,symmetry,patientage,tumourradius,
  tumoursunken,tumourdensity,tumourtexture,
  maxarea,maxgirth,maxevenness,
  maxage,maxradius,maxtexture,
  maxdensity,maxsunken,maxsunkencount,
  maxsymmetry,maxchemotherapy,
  dataset,readobjectarray,compare} from './data/metedata';

var container = document.getElementById("selectedvariables");

var variables =document.getElementById("variable");
variables.addEventListener("click",function(e){
  var target = e.target;
  var div = document.createElement("div");
  var elementx = document.getElementById("xaxis");
  var elementy = document.getElementById("yaxis");
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
          switch(elementy.innerText){
            case "肿瘤平滑度":
              drawcolumn(maxevenness,"肿瘤平滑度");
              break;
            case "肿瘤面积":
              drawcolumn(maxarea,"肿瘤面积");
              break;
            case "肿瘤周长":
              drawcolumn(maxgirth,"肿瘤周长");
              break;
            case "年龄":
              drawcolumn(maxage,"年龄");
              break;
            case "肿瘤半径":
              drawcolumn(maxradius,"肿瘤半径");
              break;
            case "肿瘤质地":
              drawcolumn(maxtexture,"肿瘤质地");
              break;
            case "肿瘤致密度":
              drawcolumn(maxdensity,"肿瘤致密度");
              break;
            case "肿瘤凹陷度":
              drawcolumn(maxsunken,"肿瘤凹陷度");
              break;
            case "凹陷点数":
              drawcolumn(maxsunkencount,"凹陷点数");
              break;
            case "对称性":
              drawcolumn(maxsymmetry,"对称性");
              break;
            case "化疗时长":
              drawcolumn(maxchemotherapy,"化疗时长");
              break;
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
      }else if((elementy ==null)&&(elementx.innerText != "肿瘤平滑度")&&
        (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxevenness,"肿瘤平滑度");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxevenness,"肿瘤半径","肿瘤平滑度","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxevenness,"肿瘤质地","肿瘤平滑度","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxevenness,"肿瘤致密度","肿瘤平滑度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxevenness,"肿瘤凹陷度","肿瘤平滑度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxevenness,"凹陷点数","肿瘤平滑度","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxevenness,"对称性","肿瘤平滑度","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxevenness,"年龄","肿瘤平滑度","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxevenness,"化疗时长","肿瘤平滑度","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤平滑度")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤周长":
            drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxevenness,maxradius,"肿瘤平滑度","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxevenness,maxtexture,"肿瘤平滑度","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxevenness,maxdensity,"肿瘤平滑度","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxevenness,maxsunken,"肿瘤平滑度","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxevenness,maxsunkencount,"肿瘤平滑度","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxevenness,maxsymmetry,"肿瘤平滑度","对称性","circle");
            break;
          case "年龄":
            drawscatter(maxevenness,maxage,"肿瘤平滑度","年龄","circle");
            break;
          case "化疗时长":
            drawscatter(maxevenness,maxchemotherapy,"肿瘤平滑度","化疗时长","circle");
            break;
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
      }else if((elementy ==null)&&(elementx.innerText != "肿瘤周长")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxgirth,"肿瘤周长");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxgirth,"肿瘤平滑度","肿瘤周长","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxgirth,"肿瘤半径","肿瘤周长","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxgirth,"肿瘤质地","肿瘤周长","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxgirth,"肿瘤致密度","肿瘤周长","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxgirth,"肿瘤凹陷度","肿瘤周长","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxgirth,"凹陷点数","肿瘤周长","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxgirth,"对称性","肿瘤周长","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxgirth,"年龄","肿瘤周长","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxgirth,"化疗时长","肿瘤周长","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤周长")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxgirth,maxevenness,"肿瘤周长","肿瘤平滑度","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxgirth,maxradius,"肿瘤周长","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxgirth,maxtexture,"肿瘤周长","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxgirth,maxdensity,"肿瘤周长","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxgirth,maxsunken,"肿瘤周长","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxgirth,maxsunkencount,"肿瘤周长","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxgirth,maxsymmetry,"肿瘤周长","对称性","circle");
            break;
          case "年龄":
            drawscatter(maxgirth,maxage,"肿瘤周长","年龄","circle");
            break;
          case "化疗时长":
            drawscatter(maxgirth,maxchemotherapy,"肿瘤周长","化疗时长","circle");
            break;
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
      }else if((elementy ==null)&&(elementx.innerText != "肿瘤面积")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxarea,"肿瘤面积");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxarea,"肿瘤平滑度","肿瘤面积","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxarea,"肿瘤周长","肿瘤面积","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxarea,"肿瘤半径","肿瘤面积","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxarea,"肿瘤质地","肿瘤面积","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxarea,"肿瘤致密度","肿瘤面积","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxarea,"肿瘤凹陷度","肿瘤面积","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxarea,"凹陷点数","肿瘤面积","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxarea,"对称性","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxarea,"年龄","肿瘤面积","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxarea,"化疗时长","肿瘤面积","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤面积")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxarea,maxevenness,"肿瘤面积","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxarea,maxgirth,"肿瘤面积","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxarea,maxradius,"肿瘤面积","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxarea,maxtexture,"肿瘤面积","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxarea,maxdensity,"肿瘤面积","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxarea,maxsunken,"肿瘤面积","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxarea,maxsunkencount,"肿瘤面积","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxarea,maxsymmetry,"肿瘤面积","对称性","circle");
            break;
          case "年龄":
            drawscatter(maxarea,maxage,"肿瘤面积","年龄","circle");
            break;
          case "化疗时长":
            drawscatter(maxarea,maxchemotherapy,"肿瘤面积","化疗时长","circle");
            break;
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
      div.innerText = "年龄";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawpie("年龄");
        break;
      }else if((elementy == null)&&(elementx.innerText != "年龄")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxage,"年龄");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxage,"肿瘤平滑度","年龄","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxage,"肿瘤周长","年龄","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxage,"肿瘤半径","年龄","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxage,"肿瘤质地","年龄","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxage,"肿瘤致密度","年龄","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxage,"肿瘤凹陷度","年龄","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxage,"凹陷点数","年龄","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxage,"对称性","年龄","circle");
            break;
          case "年龄":
            drawscatter(maxarea,maxage,"肿瘤面积","年龄","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxage,"化疗时长","年龄","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "年龄")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxage,maxevenness,"年龄","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxage,maxgirth,"年龄","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxage,maxradius,"年龄","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxage,maxtexture,"年龄","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxage,maxdensity,"年龄","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxage,maxsunken,"年龄","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxage,maxsunkencount,"年龄","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxage,maxsymmetry,"年龄","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxage,maxarea,"年龄","肿瘤面积","circle");
            break;
          case "化疗时长":
            drawscatter(maxage,maxchemotherapy,"年龄","化疗时长","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "年龄")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "年龄")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "chemotherapyduration":
      div.innerText = "化疗时长";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        drawpie("化疗时长");
        break;
      }else if((elementy == null)&&(elementx.innerText != "化疗时长")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxchemotherapy,"化疗时长");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxchemotherapy,"肿瘤平滑度","化疗时长","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxchemotherapy,"肿瘤周长","化疗时长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxchemotherapy,"肿瘤半径","化疗时长","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxchemotherapy,"肿瘤质地","化疗时长","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxchemotherapy,"肿瘤致密度","化疗时长","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxchemotherapy,"肿瘤凹陷度","化疗时长","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxchemotherapy,"凹陷点数","化疗时长","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxchemotherapy,"对称性","化疗时长","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxchemotherapy,"肿瘤面积","化疗时长","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxchemotherapy,"年龄","化疗时长","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "化疗时长")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxchemotherapy,maxevenness,"化疗时长","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxchemotherapy,maxgirth,"化疗时长","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxchemotherapy,maxradius,"化疗时长","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxchemotherapy,maxtexture,"化疗时长","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxchemotherapy,maxdensity,"化疗时长","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxchemotherapy,maxsunken,"化疗时长","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxchemotherapy,maxsunkencount,"化疗时长","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxchemotherapy,maxsymmetry,"化疗时长","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxchemotherapy,maxarea,"化疗时长","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxchemotherapy,maxage,"化疗时长","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "化疗时长")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "化疗时长")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "tumourradius":
      div.innerText = "肿瘤半径";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy == null)&&(elementx.innerText != "肿瘤半径")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxradius,"肿瘤半径");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxradius,"肿瘤平滑度","肿瘤半径","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxradius,"肿瘤周长","肿瘤半径","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxradius,"化疗时长","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxradius,"肿瘤质地","肿瘤半径","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxradius,"肿瘤致密度","肿瘤半径","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxradius,"肿瘤凹陷度","肿瘤半径","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxradius,"凹陷点数","肿瘤半径","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxradius,"对称性","肿瘤半径","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxradius,"肿瘤面积","肿瘤半径","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxradius,"年龄","肿瘤半径","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤半径")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxradius,maxevenness,"肿瘤半径","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxradius,maxgirth,"肿瘤半径","肿瘤周长","circle");
            break;
          case "化疗时长":
            drawscatter(maxradius,maxchemotherapy,"肿瘤半径","化疗时长","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxradius,maxtexture,"肿瘤半径","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxradius,maxdensity,"肿瘤半径","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxradius,maxsunken,"肿瘤半径","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxradius,maxsunkencount,"肿瘤半径","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxradius,maxsymmetry,"肿瘤半径","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxradius,maxarea,"肿瘤半径","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxradius,maxage,"肿瘤半径","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤半径")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "肿瘤半径")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "tumourtexture":
      div.innerText = "肿瘤质地";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy == null)&&(elementx.innerText != "肿瘤质地")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxtexture,"肿瘤质地");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxtexture,"肿瘤平滑度","肿瘤质地","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxtexture,"肿瘤周长","肿瘤质地","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxtexture,"肿瘤半径","肿瘤质地","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxtexture,"化疗时长","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxtexture,"肿瘤致密度","肿瘤质地","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxtexture,"肿瘤凹陷度","肿瘤质地","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxtexture,"凹陷点数","肿瘤质地","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxtexture,"对称性","肿瘤质地","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxtexture,"肿瘤面积","肿瘤质地","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxtexture,"年龄","肿瘤质地","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤质地")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxtexture,maxevenness,"肿瘤质地","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxtexture,maxgirth,"肿瘤质地","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxtexture,maxradius,"肿瘤质地","肿瘤半径","circle");
            break;
          case "化疗时长":
            drawscatter(maxtexture,maxchemotherapy,"肿瘤质地","化疗时长","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxtexture,maxdensity,"肿瘤质地","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxtexture,maxsunken,"肿瘤质地","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxtexture,maxsunkencount,"肿瘤质地","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxtexture,maxsymmetry,"肿瘤质地","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxtexture,maxarea,"肿瘤质地","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxtexture,maxage,"肿瘤质地","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤质地")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "肿瘤质地")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "tumourdensity":
      div.innerText = "肿瘤致密度";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy == null)&&(elementx.innerText != "肿瘤致密度")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxdensity,"肿瘤致密度");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxdensity,"肿瘤平滑度","肿瘤致密度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxdensity,"肿瘤周长","肿瘤致密度","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxdensity,"肿瘤半径","肿瘤致密度","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxdensity,"肿瘤质地","肿瘤致密度","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxdensity,"化疗时长","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxdensity,"肿瘤凹陷度","肿瘤致密度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxdensity,"凹陷点数","肿瘤致密度","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxdensity,"对称性","肿瘤致密度","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxdensity,"肿瘤面积","肿瘤致密度","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxdensity,"年龄","肿瘤致密度","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤致密度")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxdensity,maxevenness,"肿瘤致密度","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxdensity,maxgirth,"肿瘤致密度","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxdensity,maxradius,"肿瘤致密度","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxdensity,maxtexture,"肿瘤致密度","肿瘤质地","circle");
            break;
          case "化疗时长":
            drawscatter(maxdensity,maxchemotherapy,"肿瘤致密度","化疗时长","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxdensity,maxsunken,"肿瘤致密度","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxdensity,maxsunkencount,"肿瘤致密度","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxdensity,maxsymmetry,"肿瘤致密度","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxdensity,maxarea,"肿瘤致密度","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxdensity,maxage,"肿瘤致密度","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤致密度")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "肿瘤致密度")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "tumoursunken":
      div.innerText = "肿瘤凹陷度";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy == null)&&(elementx.innerText != "肿瘤凹陷度")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxsunken,"肿瘤凹陷度");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxsunken,"肿瘤平滑度","肿瘤凹陷度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxsunken,"肿瘤周长","肿瘤凹陷度","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxsunken,"肿瘤半径","肿瘤凹陷度","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxsunken,"肿瘤质地","肿瘤凹陷度","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxsunken,"肿瘤致密度","肿瘤凹陷度","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxsunken,"化疗时长","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxsunken,"凹陷点数","肿瘤凹陷度","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxsunken,"对称性","肿瘤凹陷度","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxsunken,"肿瘤面积","肿瘤凹陷度","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxsunken,"年龄","肿瘤凹陷度","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "肿瘤凹陷度")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxsunken,maxevenness,"肿瘤凹陷度","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxsunken,maxgirth,"肿瘤凹陷度","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxsunken,maxradius,"肿瘤凹陷度","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxsunken,maxtexture,"肿瘤凹陷度","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxsunken,maxdensity,"肿瘤凹陷度","肿瘤致密度","circle");
            break;
          case "化疗时长":
            drawscatter(maxsunken,maxchemotherapy,"肿瘤凹陷度","化疗时长","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunken,maxsunkencount,"肿瘤凹陷度","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxsunken,maxsymmetry,"肿瘤凹陷度","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxsunken,maxarea,"肿瘤凹陷度","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxsunken,maxage,"肿瘤凹陷度","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "肿瘤凹陷度")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "肿瘤凹陷度")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "sunkenpoint":
      div.innerText = "凹陷点数";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy == null)&&(elementx.innerText != "凹陷点数")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxsunkencount,"凹陷点数");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxsunkencount,"肿瘤平滑度","凹陷点数","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxsunkencount,"肿瘤周长","凹陷点数","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxsunkencount,"肿瘤半径","凹陷点数","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxsunkencount,"肿瘤质地","凹陷点数","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxsunkencount,"肿瘤致密度","凹陷点数","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxsunkencount,"肿瘤凹陷度","凹陷点数","circle");
            break;
          case "化疗时长":
            drawscatter(maxchemotherapy,maxsunkencount,"化疗时长","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxsunkencount,"对称性","凹陷点数","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxsunkencount,"肿瘤面积","凹陷点数","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxsunkencount,"年龄","凹陷点数","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "凹陷点数")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxsunkencount,maxevenness,"凹陷点数","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxsunkencount,maxgirth,"凹陷点数","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxsunkencount,maxradius,"凹陷点数","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxsunkencount,maxtexture,"凹陷点数","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxsunkencount,maxdensity,"凹陷点数","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunkencount,maxsunken,"凹陷点数","肿瘤凹陷度","circle");
            break;
          case "化疗时长":
            drawscatter(maxsunkencount,maxchemotherapy,"凹陷点数","化疗时长","circle");
            break;
          case "对称性":
            drawscatter(maxsunkencount,maxsymmetry,"凹陷点数","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxsunkencount,maxarea,"凹陷点数","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxsunkencount,maxage,"凹陷点数","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "凹陷点数")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "凹陷点数")){
        container.removeChild(elementy);
        break;
      }
      break;
    case "symmetry":
      div.innerText = "对称性";
      if((elementx == null)&&(elementy == null)){
        div.setAttribute("id","xaxis");
        div.className += "axisdimension";
        container.appendChild(div);
        break;
      }else if((elementy == null)&&(elementx.innerText != "对称性")&&
      (elementx.innerText != "肿瘤性质")){
        div.setAttribute("id","yaxis");
        div.className +="axismagnitude";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementx.innerText){
          case "ID编号":
            drawcolumn(maxsymmetry,"对称性");
            break;
          case "肿瘤平滑度":
            drawscatter(maxevenness,maxsymmetry,"肿瘤平滑度","对称性","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxgirth,maxsymmetry,"肿瘤周长","对称性","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxradius,maxsymmetry,"肿瘤半径","对称性","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxtexture,maxsymmetry,"肿瘤质地","对称性","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxdensity,maxsymmetry,"肿瘤致密度","对称性","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsunken,maxsymmetry,"肿瘤凹陷度","对称性","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsunkencount,maxsymmetry,"凹陷点数","对称性","circle");
            break;
          case "对称性":
            drawscatter(maxchemotherapy,maxsymmetry,"化疗时长","对称性","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxarea,maxsymmetry,"肿瘤面积","对称性","circle");
            break;
          case "年龄":
            drawscatter(maxage,maxsymmetry,"年龄","对称性","circle");
            break;
        }
        break;
      }else if((elementx == null)&&(elementy.innerText != "对称性")){
        div.setAttribute("id","xaxis");
        div.className +="axisdimension";
        container.appendChild(div);
        if(d3.select("svg") != null){
          d3.select("svg").remove();
        }
        switch(elementy.innerText){
          case "肿瘤平滑度":
            drawscatter(maxsymmetry,maxevenness,"对称性","肿瘤平滑度","circle");
            break;
          case "肿瘤周长":
            drawscatter(maxsymmetry,maxgirth,"对称性","肿瘤周长","circle");
            break;
          case "肿瘤半径":
            drawscatter(maxsymmetry,maxradius,"对称性","肿瘤半径","circle");
            break;
          case "肿瘤质地":
            drawscatter(maxsymmetry,maxtexture,"对称性","肿瘤质地","circle");
            break;
          case "肿瘤致密度":
            drawscatter(maxsymmetry,maxdensity,"对称性","肿瘤致密度","circle");
            break;
          case "肿瘤凹陷度":
            drawscatter(maxsymmetry,maxsunken,"对称性","肿瘤凹陷度","circle");
            break;
          case "凹陷点数":
            drawscatter(maxsymmetry,maxsunkencount,"对称性","凹陷点数","circle");
            break;
          case "对称性":
            drawscatter(maxsymmetry,maxchemotherapy,"对称性","化疗时长","circle");
            break;
          case "肿瘤面积":
            drawscatter(maxsymmetry,maxarea,"对称性","肿瘤面积","circle");
            break;
          case "年龄":
            drawscatter(maxsymmetry,maxage,"对称性","年龄","circle");
            break;
        }
        break;
      }else if((elementx != null)&&(elementx.innerText == "对称性")){
        container.removeChild(elementx);
        break;
      }else if((elementy != null)&&(elementy.innerText == "对称性")){
        container.removeChild(elementy);
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
        switch(elementy.innerText){
          case "肿瘤平滑度":
            dataset.sort(compare("肿瘤平滑度"));
            drawcolumn(maxevenness,"肿瘤平滑度");
            break;
          case "肿瘤面积":
            dataset.sort(compare("肿瘤面积"));
            drawcolumn(maxarea,"肿瘤面积");
            break;
          case "肿瘤周长":
            dataset.sort(compare("肿瘤周长"));
            drawcolumn(maxgirth,"肿瘤周长");
            break;
          case "年龄":
            drawcolumn(maxage,"年龄");
            break;
          case "肿瘤半径":
            drawcolumn(maxradius,"肿瘤半径");
            break;
          case "肿瘤质地":
            drawcolumn(maxtexture,"肿瘤质地");
            break;
          case "肿瘤致密度":
            drawcolumn(maxdensity,"肿瘤致密度");
            break;
          case "肿瘤凹陷度":
            drawcolumn(maxsunken,"肿瘤凹陷度");
            break;
          case "凹陷点数":
            drawcolumn(maxsunkencount,"凹陷点数");
            break;
          case "对称性":
            drawcolumn(maxsymmetry,"对称性");
            break;
          case "化疗时长":
            drawcolumn(maxchemotherapy,"化疗时长");
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
