var menu_btn = document.querySelector("#menu-btn");

var sidebar = document.querySelector("#sidebar");

var container = document.querySelector(".my-container");

menu_btn.addEventListener("click", () => {
   sidebar.classList.toggle("active-nav");
   container.classList.toggle("active-cont");
});

// Tiempo
function showTime() {

   var time = new Date().toLocaleTimeString();
   var timeInt = parseInt(time);
   if (timeInt > 12){
      document.getElementById('time').innerHTML= time + " PM";
   }
   else if (timeInt < 12){
      document.getElementById('time').innerHTML= time + " AM";
   }

}
showTime();
setInterval(showTime, 1000);