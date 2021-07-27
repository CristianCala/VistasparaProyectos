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
   sidebar.querySelector('#lista').classList.toggle("mover-items");
   sidebar.querySelector('#text-hidden').classList.toggle('hidden');
   sidebar.querySelector('#icon').classList.toggle('mx-2');

   sidebar.querySelector('#lista2').classList.toggle("mover-items");
   sidebar.querySelector('#text-hidden2').classList.toggle('hidden');
   sidebar.querySelector('#icon2').classList.toggle('mx-2');

   sidebar.querySelector('#lista3').classList.toggle("mover-items");
   sidebar.querySelector('#text-hidden3').classList.toggle('hidden');
   sidebar.querySelector('#icon3').classList.toggle('mx-2');

   sidebar.querySelector('#lista4').classList.toggle("mover-items");
   sidebar.querySelector('#text-hidden4').classList.toggle('hidden');
   sidebar.querySelector('#icon4').classList.toggle('mx-2');

   sidebar.querySelector('#lista5').classList.toggle("mover-items");
   sidebar.querySelector('#text-hidden5').classList.toggle('hidden');
   sidebar.querySelector('#icon5').classList.toggle('mx-2');
}

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
const colorEnlace = document.querySelectorAll('.list');

function colorLink(){
   if(colorEnlace){
      // por cada <I> activa o desactiva la clase link_active
      colorEnlace.forEach(a=> a.classList.remove('active'))
      this.classList.add('active');
   }

}
colorEnlace.forEach(a => a.addEventListener('click', colorLink));
