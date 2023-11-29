let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    userIcon.classList.remove('active');
    navbar.classList.remove('active');
    
}
let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    userIcon.classList.remove('active');
     navbar.classList.remove('active');
   
}

let userIcon = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
 userIcon.classList.toggle('active')
    search.classList.remove('active');
    cart.classList.remove('active');
     navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.remove('active');
  userIcon.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  
}
function monHeader(){
  let btn = document.querySelector('.bx-menu');
  let headers = document.querySelector('.header')
  let links = document.querySelectorAll('.navbar a')
  btn.addEventListener('click', () =>{
  headers.classList.toggle('show-nav');
  })
  links.forEach('link', () => {
    links.addEventListener('click', () =>{
      headers.classList.remove('show-nav');
      })
  })
}
monHeader();

let click = document.querySelector('.btn-buy');
click.document.classList