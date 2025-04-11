// Sélection des éléments nécessaires
const pastilles = document.querySelectorAll(".pastille");
const texteDataInfo = document.querySelector("#texte-data-info");
const texteInfo = document.querySelector(".texte-data-info");

// Fonction pour afficher le texte
function afficherTexte(event) {
  const info = event.currentTarget.getAttribute("data-info");
  texteInfo.textContent = info; // Met le texte dans la balise p
  texteDataInfo.style.display = "block"; // Affiche la div
}

// Fonction pour cacher le texte
function cacherTexte(event) {
  if (!event.target.closest(".pastille")) {
    texteDataInfo.style.display = "none"; // Cache la div si on clique ailleurs
  }
}

// Ajoute des écouteurs d'événements sur chaque pastille
pastilles.forEach((pastille) => {
  pastille.addEventListener("click", afficherTexte);
});

// Écouteur d'événement sur le document pour cacher le texte
document.addEventListener("click", cacherTexte);
