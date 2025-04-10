// Importation des images
const images = [
  { src: "/media/image/01_face.webp", alt: "Vue de face de la figurine LEGO" },
  {
    src: "/media/image/02_tiersDroit.webp",
    alt: "Vue de tiers face droit de la figurine LEGO",
  },
  {
    src: "/media/image/03_troisQuartsDroit.webp",
    alt: "Vue de trois quarts face droit de la figurine LEGO",
  },
  {
    src: "/media/image/04_ProfileDroit.webp",
    alt: "Vue de profil droit de la figurine LEGO",
  },
  {
    src: "/media/image/05_troisQuartsDosDroit.webp",
    alt: "Vue de trois quarts dos droit de la figurine LEGO",
  },
  { src: "/media/image/06_dos.webp", alt: "Vue de dos de la figurine LEGO" },
  {
    src: "/media/image/07_troisQuartsDosGauche.webp",
    alt: "Vue de trois quarts dos gauche de la figurine LEGO",
  },
  {
    src: "/media/image/08_ProfileGauche.webp",
    alt: "Vue de profil gauche de la figurine LEGO",
  },
  {
    src: "/media/image/09_troisQuartsGauche.webp",
    alt: "Vue de trois quarts face gauche de la figurine LEGO",
  },
  {
    src: "/media/image/10_tiersGauche.webp",
    alt: "Vue de tiers face gauche de la figurine LEGO",
  },
];

// Initialisation
const fig360 = document.getElementById("fig360");
let currentIndex = 0;
let scale = 1;
let isAnimating = false;

// Création de l'image dans la section
const imgElement = document.createElement("img");
imgElement.src = images[currentIndex].src;
imgElement.alt = images[currentIndex].alt;
imgElement.style.transition = "transform 0.1s ease";
imgElement.style.width = "100%";
imgElement.style.height = "auto";
imgElement.style.objectFit = "contain";
fig360.appendChild(imgElement);

// Gestion du scroll
function handleScroll() {
  if (!isAnimating) return;

  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Calcul de l'index de l'image
  const newIndex =
    Math.floor((scrollY / maxScroll) * images.length) % images.length;
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    imgElement.src = images[currentIndex].src;
    imgElement.alt = images[currentIndex].alt;
  }

  // Effet de zoom/dézoom
  const newScale = 1 + scrollY / maxScroll;
  if (newScale !== scale) {
    scale = newScale;
    imgElement.style.transform = `scale(${scale})`;
  }
}

// Intersection Observer pour détecter si la section est visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isAnimating = true;
        window.addEventListener("scroll", handleScroll);
      } else {
        isAnimating = false;
        window.removeEventListener("scroll", handleScroll);
      }
    });
  },
  { threshold: 0.5 } // Déclenche lorsque 50% de la section est visible
);

observer.observe(fig360);
