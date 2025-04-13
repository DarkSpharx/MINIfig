// les variables pour le menu
let openMenu = document.getElementById("open-menu-icone");
let openMenuPassif = document.getElementById("open-menu-passif");
let openMenuActif = document.getElementById("open-menu-actif");

let closeMenu = document.getElementById("close-menu-icone");
let closeMenuPassif = document.getElementById("close-menu-passif");
let closeMenuActif = document.getElementById("close-menu-actif");

let burgerMenu = document.getElementById("burger-menu");

// cacher le header au scroll down et le faire réapparaître au scroll up
let lastScrollPosition = 0; // Initialiser la position de défilement précédente
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Défilement vers le bas
    header.style.transform = "translateY(-100%)"; // Masquer le header
  } else {
    // Défilement vers le haut
    header.style.transform = "translateY(0)"; // Afficher le header
  }

  lastScrollPosition = currentScrollPosition;
});

// Ajouter des événements de hover à openMenu
openMenu.addEventListener("mouseenter", () => {
  openMenuPassif.classList.add("display-none");
  openMenuActif.classList.add("display-block");
});

openMenu.addEventListener("mouseleave", () => {
  openMenuPassif.classList.remove("display-none");
  openMenuActif.classList.remove("display-block");
});

closeMenu.addEventListener("mouseenter", () => {
  closeMenuPassif.classList.add("display-none");
  closeMenuActif.classList.add("display-block");
});

closeMenu.addEventListener("mouseleave", () => {
  closeMenuPassif.classList.remove("display-none");
  closeMenuActif.classList.remove("display-block");
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

// // Enlever la classe .burger-menu-open a burgerMenu au scroll ou au redimensionnement de la fenêtre
window.addEventListener("scroll", () => {
  burgerMenu.classList.remove("burger-menu-open");
});

window.addEventListener("resize", () => {
  burgerMenu.classList.remove("burger-menu-open");
});

// // Enlever la classe .burger-menu-open au clic sur un lien dans ou en dehors de #burger-menu
// document.addEventListener("click", (event) => {
//   if (
//     event.target.closest("#burger-menu a") || // Clic sur un lien dans #burger-menu
//     !event.target.closest("#burger-menu") // Clic en dehors de #burger-menu
//   ) {
//     burgerMenu.classList.remove("burger-menu-open");
//   }
// });
