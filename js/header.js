// les variables pour le menu
let openMenu = document.getElementById("open-menu-icone");
let openMenuPassif = document.getElementById("open-menu-passif");
let openMenuActif = document.getElementById("open-menu-actif");

let closeMenu = document.getElementById("close-menu-icone");
let closeMenuPassif = document.getElementById("close-menu-passif");
let closeMenuActif = document.getElementById("close-menu-actif");

// cacher le header au scroll down et le faire réapparaître au scroll up
let lastScrollPosition = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (
    currentScrollPosition > lastScrollPosition &&
    currentScrollPosition > window.innerHeight * 0.5
  ) {
    // Scrolling down past 50vh
    header.style.transform = "translateY(-100%)"; // Hide header
  } else if (currentScrollPosition < lastScrollPosition) {
    // Scrolling up
    header.style.transform = "translateY(0)"; // Show header
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
// le click sur l'icone menu
// afficher le burger menu au clic sur l'icone open menu
// fermer le burger menu au clic sur l'icone close menu et ou au scroll ou resize de la fenêtre
// fermer le burger menu au clic sur un lien du menu ou en dehors du menu
