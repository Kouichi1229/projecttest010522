var day;
var Today=new Date();

switch (new Date().getDay()) {
  case 0:
  day = "星期日";
  break;
  case 1:
  day = "星期一";
  break;
  case 2:
  day = "星期二";
  break;
  case 3:
  day = "星期三";
  break;
  case 4:
  day = "星期四";
  break;
  case 5:
  day = "星期五";
  break;
  case  6:
  day = "星期六";
}
document.getElementById("weekend").innerHTML = day;
document.getElementById('mounth').innerHTML = Today.getMonth()+1 + "月" ;
document.getElementById('date').innerHTML = Today.getDate();
document.getElementById('year').innerHTML ='栽種年份：'+ Today.getFullYear();
document.getElementById('update').innerHTML ='更新日期：'+ Today.getFullYear()+'/'+ Today.getMonth()+1 +'/'+ Today.getDate();