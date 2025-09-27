document.addEventListener("DOMContentLoaded", () => {
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    if (sidenav && openBtn && closeBtn) {
        openBtn.onclick = () => sidenav.classList.add("active");
        closeBtn.onclick = () => sidenav.classList.remove("active");
    }

    const apparitionElements = document.querySelectorAll('.apparition');
    if (apparitionElements.length) {
        const observerApparition = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        apparitionElements.forEach(el => observerApparition.observe(el));
    }

    const hiddenElements = document.querySelectorAll('.hidden');
    if (hiddenElements.length) {
        const observerHidden = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observerHidden.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        hiddenElements.forEach(el => observerHidden.observe(el));
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        const toggleBtn = block.querySelector('.voir-plus');
        const hiddenText = block.querySelector('.hidden-text');

        if (toggleBtn && hiddenText) {
            toggleBtn.addEventListener('click', () => {
                block.classList.toggle('expanded');
                toggleBtn.textContent = block.classList.contains('expanded') ? 'Voir moins' : 'Voir plus';
            });
        }
    });

    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const message = "Arrive bientôt";
        item.addEventListener("mouseenter", () => {
            item.setAttribute("title", message);
        });
    });
});

window.addEventListener("load", () => {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

        if (loader && content) {
            setTimeout(() => {
                loader.style.display = "none";
                content.style.display = "block";
            }, 3000);
        }
    } else {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        if (loader) loader.style.display = "none";
        if (content) content.style.display = "block";
    }
});
