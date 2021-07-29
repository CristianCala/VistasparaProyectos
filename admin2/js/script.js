var menu_btn = document.querySelector("#menu-btn");

var sidebar = document.querySelector("#sidebar");

var container = document.querySelector(".my-container");

var brand = document.querySelector("#brand");

menu_btn.addEventListener("click", () => {
   sidebar.classList.toggle("active-nav");
   container.classList.toggle("active-cont");
   brand.classList.toggle("mover-brand");
   moveContent();
});


function moveContent(){

   sidebar.querySelectorAll('.nav-item').forEach(elemt => elemt.classList.toggle("mover-items"));
   sidebar.querySelectorAll('.text-hidden').forEach(elemt => elemt.classList.toggle("hidden"));
}

// Tiempo
function showTime() {

   var time = new Date().toLocaleTimeString();
   var timeInt = parseInt(time);
   if (timeInt > 12){
      document.getElementById('time').innerHTML= time;
   }
   else if (timeInt < 12){
      document.getElementById('time').innerHTML= time;
   }

}
showTime();
setInterval(showTime, 1000);

// Selección dashboard
const colorEnlace = document.querySelectorAll('.list');

function colorLink(){
   if(colorEnlace){
      // por cada <I> activa o desactiva la clase link_active
      colorEnlace.forEach(a=> a.classList.remove('active'))
      this.classList.add('active');
   }

}
colorEnlace.forEach(a => a.addEventListener('click', colorLink));
