  const form = document.getElementById("legoContactForm");
  const statusMsg = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusMsg.textContent = "";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      statusMsg.textContent = "Merci de remplir tous les champs.";
      statusMsg.style.color = "red";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusMsg.textContent = "Adresse email invalide.";
      statusMsg.style.color = "red";
      return;
    }

    statusMsg.style.color = "green";
    statusMsg.textContent = "Merci ! Ton message a été envoyé avec succès 🧱";

    form.reset();
  });