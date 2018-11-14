function average(m){
    var sum_m=0,ave_m=0;
    for(var i=0;i<m.length;i++){
        sum_m += m[i];
    }
    ave_m = sum_m/m.length;
    return ave_m;
}
function standard_deviation(m){
    var average_m = average(m);
    var sum=0;
    for(var i=0;i<m.length;i++){
        var x = Math.pow((m[i]-average_m),2);
        sum += x; 
    }
    var standard_deviation_m = Math.sqrt(sum);
    // console.log("standard_deviation_m");
    // console.log(standard_deviation_m);
    return standard_deviation_m;
}
var calculate = function(x,y){
    var ave_x = average(x);
    var ave_y = average(y);
    var sd_x = standard_deviation(x);
    var sd_y = standard_deviation(y);
    var numerator=0,denominator=0;
    for(var i=0;i<x.length;i++){
        numerator += (x[i]-ave_x)*(y[i]-ave_y);
    }
    denominator = sd_x*sd_y;
    return Math.abs(numerator/denominator);
}

export  default {calculate};