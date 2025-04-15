const topBtn = document.getElementById("topBtn");

// Affiche le bouton au scroll
// window.onscroll = () => {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     topBtn.style.display = "block";
//   } else {
//     topBtn.style.display = "none";
//   }
// };

// Scroll fluide vers le haut
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
