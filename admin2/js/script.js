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

// Selección dashboard

// Funcion focus link
const colorEnlace = document.querySelectorAll('.list');

function colorLink(){
   if(colorEnlace){
      // por cada <I> activa o desactiva la clase lin_active
      colorEnlace.forEach(l=> l.classList.remove('active'))
      this.classList.add('active');
   }
}
colorEnlace.forEach(I => I.addEventListener('click', colorLink));
