document.addEventListener("DOMContentLoaded", () => {

  // BOTÓN HAMBURGUESA
  const menuBtn = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // SE CIERRE EL MENU
const links = document.querySelectorAll("#navMenu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

  // CAMBIO DE TEXTO (About)
  const btn = document.getElementById("changeTextBtn");
  const text = document.getElementById("aboutText");

  if (btn) {
    btn.addEventListener("click", () => {
      text.textContent = "Now you are interacting with my portfolio 🚀";
    });
  }

});