// Sélection des éléments nécessaires
const pastilles = document.querySelectorAll(".pastille");
const texteDataInfo = document.querySelector("#texte-data-info");
const texteInfo = document.querySelector(".texte-data-info");

// Fonction pour afficher le texte au clic sur une pastille
function afficherTexte(event) {
  const info = event.currentTarget.getAttribute("data-info");
  texteInfo.textContent = info;
  texteDataInfo.style.display = "block";
  event.stopPropagation(); // Empêche le clic de se propager au document
}

// Fonction pour cacher le texte quand on clique ailleurs
function cacherTexteSiClickHors(event) {
  const estDansTexte = texteDataInfo.contains(event.target);
  const estUnePastille = event.target.classList.contains("pastille");

  if (!estDansTexte && !estUnePastille) {
    texteDataInfo.style.display = "none";
    texteInfo.textContent = "";
  }
}

// Ajoute les écouteurs d'événements
pastilles.forEach((pastille) => {
  pastille.addEventListener("click", afficherTexte);
});

// Écoute le clic global pour masquer le texte
document.addEventListener("click", cacherTexteSiClickHors);
