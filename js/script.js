let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');
const darkMode = document.getElementById('darkMode');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 150) {
        header.classList.add('active');
    }else {
        header.classList.remove('active');
    }
}

// Scroll Reveal 
const sr = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 1000,
    reset: true
})

sr.reveal(
  ".heading, .home .content span, .home .content h3, .category .box-container .box, .footer .box-container .box .share a, .footer .box-container .box .links a",
  { interval: 200 }
);