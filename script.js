
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}

var montageMenu = document.getElementById("montageMenu");
var sousMenu = montageMenu.querySelector(".sous-menu");

montageMenu.addEventListener('mouseenter', function () {
    sousMenu.style.display = 'block';
});

montageMenu.addEventListener('mouseleave', function () {
    sousMenu.style.display = 'none';
});
window.addEventListener("load", function () {
    // Garde le loader visible pendant 3 secondes (3000ms)
    setTimeout(() => {
        // Masquer le loader
        document.getElementById("loader").style.display = "none";

        document.getElementById("content").style.display = "block";
    }, 3000); // 3000ms = 3 secondes
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Désactive l’observation une fois visible
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach((el) => observer.observe(el));
});
const videos = document.querySelectorAll(".video-hover");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});