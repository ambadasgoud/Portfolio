// ===============================
// GSAP SETUP
// ===============================

gsap.registerPlugin(ScrollTrigger);

// ===============================
// HERO ANIMATION
// ===============================

gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 0.4,
    ease: "power4.out"
});

gsap.from(".trusted", {
    y: 50,
    opacity: 0,
    duration: 0.4,
    delay: 0.2
});

gsap.from(".hero h1", {
    y: 80,
    opacity: 0,
    duration: 0.5,
    delay: 0.15,
    ease: "power4.out"
});

gsap.from(".hero p", {
    y: 60,
    opacity: 0,
    duration: 0.4,
    delay: 0.15
});

gsap.from(".hero-buttons", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    delay: 0.17
});

gsap.from(".hero-image", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    delay: 0.14,
    ease: "power4.out"
});
document.querySelectorAll('.call-btn').forEach(btn => {

    btn.addEventListener('click', () => {

        gsap.fromTo(btn,
            {
                scale: 1
            },
            {
                scale: 1.15,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });

    });

});
// ===============================
// SCROLL REVEAL
// ===============================

gsap.utils.toArray(".section-title").forEach((title) => {

    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%"
        },

        y: 60,
        opacity: 0,
        duration: 0.4
    });

});

// ===============================
// STATS CARDS
// ===============================

gsap.utils.toArray(".stat-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 80,
        opacity: 0,
        duration: 0.4,
        delay: index * 0.15

    });

});

// ===============================
// VIDEO CARDS
// ===============================

const cards = document.querySelectorAll('.video-card, .podcast-card');

cards.forEach(card => {

    const video = card.querySelector('video');
    const playBtn = card.querySelector('.play-btn');

    if (!video || !playBtn) return;

    card.addEventListener('click', () => {

        // Pause every other video
        document.querySelectorAll('.video-card video, .podcast-card video')
            .forEach(v => {

                if (v !== video) {

                    v.pause();

                    const otherCard = v.closest('.video-card, .podcast-card');

                    if (otherCard) {

                        const otherBtn =
                            otherCard.querySelector('.play-btn');

                        if (otherBtn) {
                            otherBtn.style.opacity = '1';
                        }

                    }

                }

            });

        // Play/Pause current video
        if (video.paused) {

            video.play();

            playBtn.style.opacity = '0';

        } else {

            video.pause();

            playBtn.style.opacity = '1';

        }

    });

    video.addEventListener('pause', () => {
        playBtn.style.opacity = '1';
    });

    video.addEventListener('play', () => {
        playBtn.style.opacity = '0';
    });

});



// ===============================
// PODCAST CARDS
// ===============================
document.querySelectorAll(".podcast-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height / 2) / 30}deg)
            rotateY(${-(x - rect.width / 2) / 30}deg)
            translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});
document.querySelectorAll('.podcast-card').forEach(card => {

    const video = card.querySelector('video');
    const btn = card.querySelector('.podcast-play-btn');

    if (!video || !btn) return;

    card.addEventListener('click', () => {

        // Pause all other podcast videos
        document.querySelectorAll('.podcast-card video')
            .forEach(v => {

                if (v !== video) {

                    v.pause();

                    const otherBtn =
                        v.closest('.podcast-card')
                            .querySelector('.podcast-play-btn');

                    if (otherBtn) {
                        otherBtn.style.opacity = '1';
                    }
                }

            });

        if (video.paused) {

            video.play();
            btn.style.opacity = '0';

        } else {

            video.pause();
            btn.style.opacity = '1';

        }

    });

    video.addEventListener('pause', () => {
        btn.style.opacity = '1';
    });

    video.addEventListener('play', () => {
        btn.style.opacity = '0';
    });

});
// ===============================
// FEEDBACK CARDS
// ===============================

gsap.utils.toArray(".feedback-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        delay: index * 0.15

    });

});

// ===============================
// RESULT CARDS
// ===============================

gsap.utils.toArray(".result-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 80,
        opacity: 0,
        duration: 0.4,
        delay: index * 0.15

    });

});

// ===============================
// CTA SECTION
// ===============================

gsap.from(".cta-box", {

    scrollTrigger: {
        trigger: ".cta-box",
        start: "top 80%"
    },

    scale: 0.9,
    opacity: 0,
    duration: 0.5

});
document.querySelectorAll('.email-btn').forEach(btn => {

    btn.addEventListener('click', () => {

        gsap.fromTo(btn,
            {
                scale: 1
            },
            {
                scale: 1.15,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });

    });

});
// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const value = parseInt(text);

    if (isNaN(value)) return;

    gsap.fromTo(counter,

        {
            innerText: 0
        },

        {
            innerText: value,

            duration: 0.4,

            ease: "power2.out",

            snap: {
                innerText: 1
            },

            scrollTrigger: {
                trigger: counter,
                start: "top 85%"
            },

            onUpdate: function () {

                counter.innerText =
                    Math.ceil(counter.innerText) + "+";

            }

        }

    );

});

// ===============================
// PARALLAX HERO IMAGE
// ===============================

gsap.to(".hero-image", {

    y: -60,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }

});

// ===============================
// NAVBAR BACKGROUND
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(10,10,10,0.85)";

        navbar.style.backdropFilter =
            "blur(25px)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.05)";
    }

});

// ===============================
// SMOOTH ACTIVE LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// HOVER EFFECTS
// ===============================

document.querySelectorAll(
    ".video-card, .stat-card, .result-card"
).forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${(y - rect.height / 2) / 30}deg)
             rotateY(${-(x - rect.width / 2) / 30}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// ===============================
// PRELOADER (OPTIONAL)
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ===============================
// CONSOLE BRANDING 😎
// ===============================

console.log(
    "%c Ambadas Studio",
    "font-size:24px;font-weight:bold;color:#ff7a18;"
);

console.log(
    "%c Video Editor & Motion Designer",
    "font-size:14px;color:white;"
);
