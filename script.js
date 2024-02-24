let menu = document.querySelector('.navbar-toggler');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');
let icon = document.querySelector('.navbar-toggler .span .bi');
    
menu.onclick = () =>{
   // menu.classList.toggle('bi-x');
   // menu.classList.toggle('bi-x');
   navbar.classList.toggle('active');
   
}

window.onscroll = () =>{
   // menu.classList.remove('bi-x');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }else{
     header.classList.remove('active');

}
}

if(!navbar.classList.contains('active')){
   menu.classList.remove('bi-x');
}
