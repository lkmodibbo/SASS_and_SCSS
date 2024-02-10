const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  console.log('is working')
  if(!showMenu){
    hamburger.classList.add('open');

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    showMenu = false;
  }
}