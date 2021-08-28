function getDays(){
    var date1 = '2020/12/13 17:00:00';
    var date2 = new Date();
    var date3 = date2.getTime() - new Date(date1).getTime();
  
    var days = Math.floor(date3/(24*3600*1000));
    retuen days;
  }
document.getElementById('love_time').innerHTML=getDays();

