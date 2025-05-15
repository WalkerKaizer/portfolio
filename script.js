
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




const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.apparition').forEach(el => {
    observer.observe(el);
  });
  



window.addEventListener("load", function () {
    // Garde le loader visible pendant 3 secondes (3000ms)
    setTimeout(() => {
        // Masquer le loader
        document.getElementById("loader").style.display = "none";

        document.getElementById("content").style.display = "block";
    }, 3000); // 3000ms = 3 secondes
});


//hiden-text

  const block = document.querySelector('.block');
  const toggleBtn = block.querySelector('.voir-plus');
  const hiddenText = block.querySelector('.hidden-text');

  toggleBtn.addEventListener('click', () => {
    block.classList.toggle('expanded');
    toggleBtn.textContent = block.classList.contains('expanded') ? 'Voir moins' : 'Voir plus';
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