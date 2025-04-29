
window.addEventListener('load', function () {

    setTimeout(lazyLoad, 1000);

});

function lazyLoad() {
    var card_images = document.querySelectorAll('.card-image');

    card_images.forEach(function (card_image) {
        var image_url = card_image.getAttribute('data-image-full');
        var content_image = card_image.querySelector('img');

        content_image.src = image_url;

        content_image.addEventListener('load', function () {
            card_image.style.backgroundImage = 'url(' + image_url + ')';
            card_image.className = card_image.className + ' is-loaded';
        });

    });
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

    // Gestion du sous-menu
    var montageMenu = document.getElementById("montageMenu");
    var sousMenu = montageMenu.querySelector(".sous-menu");

    // Afficher le sous-menu au survol
    montageMenu.addEventListener('mouseenter', function () {
        sousMenu.style.display = 'block';
    });

    // Cacher le sous-menu lorsque la souris quitte
    montageMenu.addEventListener('mouseleave', function () {
        sousMenu.style.display = 'none';
    })

    const videos = document.querySelectorAll(".video-hover ");

    videos.forEach(video => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });
    
        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });
    });
}




