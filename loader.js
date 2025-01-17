
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


