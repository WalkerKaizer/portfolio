
// Gestion de l'ouverture et fermeture de la barre latérale
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
});
