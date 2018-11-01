# Breast-cancer-patient-EMR
标签： HTML css js d3 

###1.introduction
An electronic medical record system for breast cancer patients.

###2.feauture list
- several kinds of visualized charts .
- modify the style in the visualized chart,like the color,size,and glyph.
- user interaction,present data values to users.

###3.usage
- choose two variables from dimensions or magnitudes as the xaxis and yaxis ,click  then it will appear in the choosed variables ,click again then it will disappear. click the subtype in the rightside bar (now we have bar chart, area chart, line chart,solid scatter and hollow scatter)then the svg will show in the chart area.
>as for now,we can produce bar chart ,area chart and line chart using 'ID' as the xaxis ,the yaxis can be 'tumour girth','tumour area' or 'tumour evenness'.for solid scatter and hollow scatter,neither of them could have the axis of 'ID'.that is because the relation of ID and other three variables is one-to-one.,which is not suitable for scatter.

- change the color,size and glyph of the chart.we can change the color of chart as we change the color in the  color input of the variables mark.the shape in the chart can also be changed.for example,we can change the circles in the solid scatter into rects or ellipse if we click the rect or ellipse of the variables mark,and we can change their size as in the same way.
- for user interaction,on the one hand,we can click the word in the variables mark,then the lable will show up in the svg.on the other hand,if we hover our cursors to the circles or rects,we can see the related imformation.when we move it away the imformation will disappear.