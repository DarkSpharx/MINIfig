// les variables pour le menu
let openMenu = document.getElementById("open-menu");
let IconeOpenMenu = document.getElementById("icone-open-menu");
let IconeOpenMenuHover = document.getElementById("icone-open-menu-hover");
let closeMenu = document.getElementById("close-menu");
let IconeCloseMenu = document.getElementById("icone-close-menu");
let IconeCloseMenuHover = document.getElementById("icone-close-menu-hover");

let burgerMenu = document.getElementById("burger-menu");

// cacher le header au scroll down et le faire réapparaître au scroll up
// let lastScrollPosition = 0; // Initialiser la position de défilement précédente
// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition) {
//     // Défilement vers le bas
//     header.style.transform = "translateY(-100%)"; // Masquer le header
//     header.style.transition = "transform 0.3s ease-in-out"; // Ajouter un effet de transition
//   } else {
//     // Défilement vers le haut
//     header.style.transform = "translateY(0)"; // Afficher le header
//   }

//   lastScrollPosition = currentScrollPosition;
// });

// Ajouter des événements de hover à openMenu
openMenu.addEventListener("mouseover", () => {
  IconeOpenMenu.style.display = "none";
  IconeOpenMenuHover.style.display = "block";
});
openMenu.addEventListener("mouseout", () => {
  IconeOpenMenu.style.display = "block";
  IconeOpenMenuHover.style.display = "none";
});
// Ajouter des événements de hover à closeMenu
closeMenu.addEventListener("mouseover", () => {
  IconeCloseMenu.style.display = "none";
  IconeCloseMenuHover.style.display = "block";
});
closeMenu.addEventListener("mouseout", () => {
  IconeCloseMenu.style.display = "block";
  IconeCloseMenuHover.style.display = "none";
});

// burger menu
// Ajouter la classe .burger-menu-open a burgerMenu au clic sur openMenu
openMenu.addEventListener("click", () => {
  burgerMenu.classList.add("burger-menu-open");
});
// Enlever la classe .burger-menu-open a burgerMenu au clic sur closeMenu
closeMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu-open");
});
// Enlever la classe .burger-menu-open a burgerMenu au scroll ou au redimensionnement de la fenêtre
window.addEventListener("scroll", () => {
  burgerMenu.classList.remove("burger-menu-open");
});
// Enlever la classe .burger-menu-open a burgerMenu au redimensionnement de la fenêtre
window.addEventListener("resize", () => {
  burgerMenu.classList.remove("burger-menu-open");
});

// Enlever la classe .burger-menu-open a burgerMenu au clic sur un lien du menu
const menuLinks = document.querySelectorAll("a");

// enlever la classe .burger-menu-open a burgerMenu au clic en dehors du menu si le menu est ouvert
document.addEventListener("click", (e) => {
  if (
    burgerMenu.classList.contains("burger-menu-open") &&
    !burgerMenu.contains(e.target) &&
    !openMenu.contains(e.target)
  ) {
    burgerMenu.classList.remove("burger-menu-open");
  }
});

menuLinks.forEach((link) =>
  link.addEventListener("click", () =>
    burgerMenu.classList.remove("burger-menu-open")
  )
);
