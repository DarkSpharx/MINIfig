// Tableau contenant les informations des images (src et alt)
const images = [
  { src: "/media/image/01_face.png", alt: "Vue de face de la figurine LEGO" },
  {
    src: "/media/image/02_tiersDroit.png",
    alt: "Vue de tiers face droit de la figurine LEGO",
  },
  {
    src: "/media/image/03_troisQuartsDroit.png",
    alt: "Vue de trois quarts face droit de la figurine LEGO",
  },
  {
    src: "/media/image/04_ProfileDroit.png",
    alt: "Vue de profil droit de la figurine LEGO",
  },
  {
    src: "/media/image/05_troisQuartsDosDroit.png",
    alt: "Vue de trois quarts dos droit de la figurine LEGO",
  },
  { src: "/media/image/06_dos.png", alt: "Vue de dos de la figurine LEGO" },
  {
    src: "/media/image/07_troisQuartsDosGauche.png",
    alt: "Vue de trois quarts dos gauche de la figurine LEGO",
  },
  {
    src: "/media/image/08_ProfileGauche.png",
    alt: "Vue de profil gauche de la figurine LEGO",
  },
  {
    src: "/media/image/09_troisQuartsGauche.png",
    alt: "Vue de trois quarts face gauche de la figurine LEGO",
  },
  {
    src: "/media/image/10_tiersGauche.png",
    alt: "Vue de tiers face gauche de la figurine LEGO",
  },
  { src: "/media/image/01_face.png", alt: "Vue de face de la figurine LEGO" },
];

// Sélection des éléments HTML
const figSection = document.getElementById("fig360");
const imgElement = document.getElementById("legoImage");
const viewer = document.getElementById("viewer360");

// Fonction pour convertir vh en pixels
function getPixelsFromVh(vh) {
  return (window.innerHeight / 100) * vh;
}

// Valeur dynamique de pixelsPerFrame basée sur 9vh
let pixelsPerFrame = getPixelsFromVh(10);

// Met à jour pixelsPerFrame si la fenêtre est redimensionnée
window.addEventListener("resize", () => {
  pixelsPerFrame = getPixelsFromVh(9);
});

// Variables de gestion de l'état
let currentIndex = 0;
let lastKnownScrollY = window.scrollY;
let ticking = false;
let zoomLevel = 1;
const minZoom = 0.9;
const maxZoom = 1.5; // Réduit le zoom maximum

// Met à jour l'image affichée
function updateImage(index) {
  if (index >= 0 && index < images.length) {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
  }
}

// Applique le zoom à l'image
function applyZoom(scale) {
  zoomLevel = Math.min(Math.max(scale, minZoom), maxZoom);
  viewer.style.transform = `scale(${zoomLevel})`;
}

// Gère le défilement
function onScroll() {
  const rect = figSection.getBoundingClientRect();
  const scrollTop = window.scrollY;

  const sectionInView = rect.top <= 0 && rect.bottom >= 0;
  viewer.style.visibility = sectionInView ? "visible" : "hidden";

  if (sectionInView) {
    const delta = scrollTop - lastKnownScrollY;

    if (Math.abs(delta) >= pixelsPerFrame) {
      const direction = delta > 0 ? "down" : "up";

      if (direction === "down" && currentIndex < images.length - 1) {
        currentIndex++;
        updateImage(currentIndex);
        applyZoom(zoomLevel + 0.05); // Zoom incrémenté réduit
      } else if (direction === "up" && currentIndex > 0) {
        currentIndex--;
        updateImage(currentIndex);
        applyZoom(zoomLevel - 0.05); // Diminution du zoom
      }

      lastKnownScrollY = scrollTop;
    }

    if (currentIndex === images.length - 1) {
      applyZoom(maxZoom);
    }
  } else if (rect.top > 0) {
    currentIndex = 0;
    updateImage(currentIndex);
    applyZoom(1);
  }

  ticking = false;
}

// Écouteur d'événement pour le défilement
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});
