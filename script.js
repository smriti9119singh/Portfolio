// Smooth scroll animation

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-card, .education-card, .contact-card, .cert-card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// Initial state

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

});

// Mobile menu

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
});