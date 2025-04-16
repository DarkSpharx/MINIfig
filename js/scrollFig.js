// Tableau des images LEGO
const images = [
  { src: "/media/image/01_face.png", alt: "Vue de face de la figurine LEGO" },
  { src: "/media/image/02_tiersDroit.png", alt: "Vue de tiers face droit" },
  { src: "/media/image/03_troisQuartsDroit.png", alt: "Vue trois quarts droit" },
  { src: "/media/image/04_ProfileDroit.png", alt: "Vue profil droit" },
  { src: "/media/image/05_troisQuartsDosDroit.png", alt: "Vue trois quarts dos droit" },
  { src: "/media/image/06_dos.png", alt: "Vue de dos" },
  { src: "/media/image/07_troisQuartsDosGauche.png", alt: "Vue trois quarts dos gauche" },
  { src: "/media/image/08_ProfileGauche.png", alt: "Vue profil gauche" },
  { src: "/media/image/09_troisQuartsGauche.png", alt: "Vue trois quarts gauche" },
  { src: "/media/image/10_tiersGauche.png", alt: "Vue tiers face gauche" },
  { src: "/media/image/01_face.png", alt: "Vue de face (retour)" },
  { src: "/media/image/11_face.png", alt: "Vue clin d'œil" },
];

// Récupération des éléments HTML
const figSection = document.getElementById("fig360");
const imgElement = document.getElementById("legoImage");
const viewer = document.getElementById("viewer360");

// Fonction pour convertir vh en pixels
function getPixelsFromVh(vh) {
  return (window.innerHeight / 100) * vh;
}

// Valeur ajustable : combien de pixels doivent être scrollés pour passer à l'image suivante
let pixelsPerFrame = getPixelsFromVh(10);

// Mise à jour dynamique si la taille de la fenêtre change
window.addEventListener("resize", () => {
  pixelsPerFrame = getPixelsFromVh(10);
});

// Variables de gestion de l’état
let currentIndex = 0;
let lastKnownScrollY = window.scrollY;
let ticking = false;
let accumulatedDelta = 0;
let zoomLevel = 1;
const minZoom = 0.9;
const maxZoom = 1.5;
const zoomStep = 0.05;

// Mise à jour de l’image affichée
function updateImage(index) {
  if (index >= 0 && index < images.length) {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
  }
}

// Application du zoom
function applyZoom(scale) {
  zoomLevel = Math.min(Math.max(scale, minZoom), maxZoom);
  viewer.style.transform = `scale(${zoomLevel})`;
}

// Gérer le scroll
function onScroll() {
  const rect = figSection.getBoundingClientRect();
  const scrollTop = window.scrollY;

  const sectionInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

  viewer.style.visibility = sectionInView ? "visible" : "hidden";

  if (sectionInView) {
    const delta = scrollTop - lastKnownScrollY;
    accumulatedDelta += delta;

    if (Math.abs(accumulatedDelta) >= pixelsPerFrame) {
      const direction = accumulatedDelta > 0 ? "down" : "up";

      if (direction === "down" && currentIndex < images.length - 1) {
        currentIndex++;
        updateImage(currentIndex);
        applyZoom(zoomLevel + zoomStep);
        accumulatedDelta = 0;
      } else if (direction === "up" && currentIndex > 0) {
        currentIndex--;
        updateImage(currentIndex);
        applyZoom(zoomLevel - zoomStep);
        accumulatedDelta = 0;
      }

      // Si dernière image, on bloque et applique un zoom max
      if (currentIndex === images.length - 1) {
        applyZoom(maxZoom);
      }
    }

    lastKnownScrollY = scrollTop;
  } else if (rect.top > 0) {
    // Reset quand on remonte au-dessus de la section
    currentIndex = 0;
    updateImage(currentIndex);
    applyZoom(1);
  }

  ticking = false;
}

// Scroll listener
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});

