$(document).ready(function(){
    $(".carousel-logo").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0:{
                items:2,
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
});
});

$(document).ready(function(){
    $(".card-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0:{
                items:1,
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
});
});

const navSlide = () => {
    const burger = document.querySelector('.nav-hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
  
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;}
      });
    
     burger.classList.toggle('toggleCl');
    });
    
}

navSlide();