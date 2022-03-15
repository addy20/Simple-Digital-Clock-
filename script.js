week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
month=['Jan','Feb','Mar','Apr','May','June','July','Aug','September','October','November','December']
function updateClock(){
    let dt=new Date();
   let day=dt.getDay();
   let mon=dt.getMonth();
   let date=dt.getDate();
   let year=dt.getFullYear();
   let hour=dt.getHours();
   let min=dt.getMinutes();
   let sec=dt.getSeconds();
   pe="AM";
   if(hour==0)
      hour=12;
   if(hour>12){
       hour-=12;
       pe="PM";
   }
   
   document.getElementById("dayname").firstChild.nodeValue=week[day];
   document.getElementById("month").firstChild.nodeValue=month[mon];
   document.getElementById("daynum").firstChild.nodeValue=pad(date);
   document.getElementById("hour").firstChild.nodeValue=pad(hour);
   document.getElementById("minutes").firstChild.nodeValue=pad(min);
   document.getElementById("seconds").firstChild.nodeValue=pad(sec);
   document.getElementById("year").firstChild.nodeValue=year;
   document.getElementById("period").firstChild.nodeValue=pe;
}
window.onload=click=>{
    setInterval(updateClock,1)
}
function pad(x){
    if(x/10<1) 
       return "0"+x;
    else
       return x ;  
}