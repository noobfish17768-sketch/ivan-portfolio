/* ==========================
   AOS INIT
========================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ==========================
   TYPING EFFECT
========================== */

const typingText = document.getElementById("typing-text");

const roles = [
    "Banking Professional",
    "Data Analyst",
    "AI Enthusiast",
    "Future Relationship Manager",
    "Digital Banking Explorer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(5,8,22,.75)";

        navbar.style.boxShadow =
            "none";
    }

});

/* ==========================
   ACTIVE MENU ON SCROLL
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            ===
            `#${current}`
        ) {

            link.classList.add("active");
        }

    });

});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon =
        menuBtn.querySelector("i");

    if (
        navMenu.classList.contains("show")
    ) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

    } else {

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});

/* ==========================
   CLOSE MOBILE MENU
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter =
                    entry.target;

                const target =
                    +counter.dataset.target;

                let count = 0;

                const increment =
                    target / 80;

                const updateCounter = () => {

                    if (count < target) {

                        count += increment;

                        counter.innerText =
                            Math.ceil(count);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            target;
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item"
    );

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    }, {
        threshold: 0.15
    });

revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(40px)";

    item.style.transition =
        "all .8s ease";

    revealObserver.observe(item);

});

/* ==========================
   HERO PARALLAX EFFECT
========================== */

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX)
        / 40;

    const y =
        (window.innerHeight / 2 - e.clientY)
        / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(`
========================================
Ivan Adrian Prastya Portfolio
Banking • Data Analytics • AI
========================================
`);