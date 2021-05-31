var date = new Date();
var today = date.getHours()+ ":" + date.getMinutes();
document.getElementById('endtime').innerHTML = today;

const start = document.getElementById("start-menu");
const btn = document.getElementById("start-button");

btn.onclick = function(){
   if(start.style.display === "none"){
    start.style.display = "block";
}else{
    start.style.display = "none"
}
}

