burger = document.querySelector('.burger');
navbar = document.querySelector('#navbar');
ullist =  document.querySelector('#ullist');
search = document.querySelector('#search');

burger.addEventListener('click', ()=>{
    search.classList.toggle('vnavv');
    ullist.classList.toggle('vnavv');
    navbar.classList.toggle('navv');
})