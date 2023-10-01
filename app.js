gsap.registerPlugin(ScrollTrigger);

// ---- ANIMATION : HERO TITLE TEXT (DISCOVER-EXPLORE,EXPERIENCE) ----  

const textChanger = document.getElementById('text-changer');
const texts = ['EXPLORE', 'EXPERIENCE', 'DISCOVER'];
let currentIndex = 0;

function changeText() {
  textChanger.style.opacity = '0';
  setTimeout(() => {
    textChanger.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
    textChanger.style.opacity = '1';
  }, 500);
}

setInterval(changeText, 3000);

// ---- ANIMATION : DEFINING VALUES ----  

const hero = document.querySelector(".hero");
const hero_desc = document.querySelector(".hero-desc");
const buttons = document.querySelector(".call-to-action-buttons");
const nav = document.querySelector(".navbar");
const logo = document.querySelector("#logo");
const hero_title = document.querySelector(".hero-title");
const section = document.querySelector(".section")

// ---- ANIMATION : HERO SECTION ----  

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("section");
    const tl = gsap.timeline();
    tl.fromTo(logo, 0.5, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
    tl.fromTo(nav, 0.5, { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
    tl.fromTo(hero_title, 0.7, { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=0.1")
    tl.fromTo(hero_desc, 0.9, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=0.1")
    tl.fromTo(buttons, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.1")

});

// ---- ANIMATION : ITINEARARY SECTION  ----  

gsap.from(".iti_title", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".iti_title",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".iti_title1", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".iti_title1",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".column1", {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec-1-columns",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".column2", {
    opacity: 0,
    y: 100,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".sec-1-columns",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".column3", {
    opacity: 0,
    y: 100,
    duration: 3,
    scrollTrigger: {
        trigger: ".sec-1-columns",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".iti_title2", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".iti_title2",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".column4", {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec-2-columns",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".column5", {
    opacity: 0,
    y: 100,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".sec-2-columns",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".column6", {
    opacity: 0,
    y: 100,
    duration: 3,
    scrollTrigger: {
        trigger: ".sec-2-columns",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

// ---- ANIMATION : SETS US APART SECTION ----  

gsap.from(".sua-description", {
    opacity: 0,
    x: -50,
    duration: 2,
    scrollTrigger: {
        trigger: ".sets-us-apart",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".title2", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".title2",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

// ---- ANIMATION : SERVICES SECTION ----  

gsap.from(".title3", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".section-row-1", {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".section-row-1",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".section-row-2", {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".section-row-2",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

// ---- ANIMATION : REVIEWS SECTION ----  

gsap.from(".title4", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".title4",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".review1", {
    opacity: 0,
    y: 100,
    duration: 1.7,
    scrollTrigger: {
        trigger: ".review1",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

gsap.from(".review2", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".review2",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});

// ---- ANIMATION : TESTIMONIALS SECTION ----  

gsap.from(".testimonial-3D-image", {
    opacity: 0,
    x: -150,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".review1",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none resume reset"
    }
});