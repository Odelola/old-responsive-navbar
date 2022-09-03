const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');


console.log(menuToggler);
menuToggler.addEventListener('click', function () {
   this.classList.toggle('active');
   menu.classList.toggle('active');
});





