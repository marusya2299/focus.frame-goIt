import './style.css';

const button = document.querySelector('.box-navigation-icon');
const menu = document.querySelector('.menu-navigation');
const iconClose = document.querySelector('.icon-close');
const header = document.querySelector('.header');
const elNavigation = header.querySelectorAll('.element-navigation');

button.addEventListener('click', () => {
    menu.classList.toggle('active');

})

iconClose.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})

elNavigation.forEach(navItem =>{
    navItem.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    });
})


