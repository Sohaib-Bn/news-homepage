const navbar = document.querySelector(".navbar");
const bg = document.querySelector(".bg")
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
    navbar.setAttribute("id", "bar-menu");
    bg.setAttribute("id", "background");
    openMenu.setAttribute("id", "hide");
});

closeMenu.addEventListener("click", () => {
    navbar.removeAttribute("id", "bar-menu");
    bg.removeAttribute("id", "background");
    openMenu.removeAttribute("id", "hide");
});


