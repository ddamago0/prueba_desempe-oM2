# 🎸 Landing Page – Rock Band (HTML & CSS Assessment)

## 📌 Project Overview

This project is a **starter template** for a performance assessment focused on building a responsive landing page for a rock band.

The goal is to transform this base into a **visually engaging, responsive, and well-structured website** that promotes the band, their identity, and upcoming events.

---

## 🎯 What is Expected

You are expected to:

* Build a complete landing page using **semantic HTML5**.
* Apply **CSS3 styles** to achieve a strong visual identity (rock style).
* Implement **responsive design** for both:

  * Desktop (>1024px)
  * Mobile
* Use **Flexbox and/or Grid** where appropriate.
* Ensure the page is **clean, readable, and well-organized**.

---

## 🧱 Project Structure

```
├── assets
│   ├── css
│   │   └── style.css
│   ├── icons
│   │   └── logo.ico
│   ├── img
│   │   ├── img-1.jpg ... img-10.jpg
│   │   └── guide.png
│   └── js
│       └── main.js
├── index.html
└── README.md
```

---

## 🧩 HTML Guidelines

Your `index.html` already includes the base structure.

You must:

* Use semantic tags:

  * `<header>`
  * `<nav>`
  * `<main>`
  * `<section>`
  * `<article>`
  * `<footer>`

* Include the following sections:

  * Hero (main visual section)
  * Events (band tour dates)
  * About (band info)
  * Multimedia (images or media content)

* Add at least one **unordered list (`<ul>`)**:

  * Influences
  * Values
  * Social links

* (Optional – Extra Points)

  * Use a **table (`<table>`)** for events

👉 Focus on **clean structure and readability**.

---

## 🎨 CSS Guidelines

The provided `style.css` is intentionally minimal.

You should:

* Define your own:

  * Colors (rock style recommended)
  * Typography
  * Spacing

* Apply layout techniques:

  * Flexbox
  * Grid

* Implement responsive design using **media queries**

* Ensure:

  * Proper spacing between sections
  * Visual hierarchy (titles, buttons, content)
  * Consistent styling

👉 Avoid writing everything in one block. Organize your CSS clearly.

---

## 📱 Responsive Design

Your site **must adapt** to different screen sizes.

Minimum requirement:

* Desktop layout (>1024px)
* Mobile layout

Hints:

* Stack elements vertically on mobile
* Consider navigation behavior (e.g., hamburger menu)
* Resize images and text properly

---

## 🖼️ Images & Assets

Inside `/assets/img` you will find:

* Multiple images (`img-1.jpg` to `img-10.jpg`)
* A visual reference: `guide.png`

Use these images to:

* Build the hero section
* Populate the gallery
* Add visual identity to the page

⚠️ The guide is a **reference**, not something to copy exactly.

---

## ⚙️ JavaScript (Optional)

The file `main.js` is included for optional enhancements:

* Mobile menu toggle
* Simple interactions

This is **not required**, but can give extra value.

---

## 📝 Good Practices

* Keep your code **clean and readable**
* Use indentation consistently
* Write comments when necessary (in English)
* Organize sections clearly

---

## 🚀 How to Run

1. Download or clone the project
2. Open `index.html` in your browser

No installation required.

---

## 🧠 Final Note

This project is not about copying a design exactly.

It is about:

* Understanding structure
* Making design decisions
* Applying responsive techniques

Your solution should reflect your own approach while meeting the requirements.

---

🔥 Good luck and rock on!


Errores encontrados y soluciones
Proyecto: PerformanceTestJS-PDM3-C5
Error 1 src/components/Sidebar.js — No se llama removeSession() al cerrar
sesion
Severidad: Alta
El boton de logout redirige al usuario pero nunca elimina la sesion del localStorage, por lo que el usuario
permanece autenticado.
Codigo con error:
document.querySelector("#logoutBtn")?.addEventListener("click", () => {
navigateTo("/");
});
Solucion:
document.querySelector("#logoutBtn")?.addEventListener("click", () => {
removeSession();
navigateTo("/");
});
Error 2 src/router/router.js — Sin proteccion de rutas autenticadas
Severidad: Alta
isAuthenticated esta importado pero nunca se usa. Cualquier usuario puede acceder a /home sin estar
logueado escribiendo la URL directamente.
Solucion:
export const router = () => {
const app = document.querySelector("#app");
let path = window.location.pathname;
if (path === "/home" && !isAuthenticated()) {
navigateTo("/");
return;
}
const view = routes[path] || notFoundView;
app.innerHTML = view();
};
Error 3 src/services/reservation.service.js — Nombre de funcion incorrecto
Severidad: Alta
La funcion se exporta como getReservation (singular) pero se importa y llama como getReservations (plural) en
home.controller.js, causando error de ejecucion: getReservations is not a function.
Codigo con error:
export const getReservation = () => http.get("/reservations");
Solucion:
export const getReservations = () => http.get("/reservations");
Error 4 src/controllers/home.controller.js — Doble asignacion a
container.innerHTML
Severidad: Media
Hay una asignacion duplicada por error de escritura que puede causar problemas al re-parsear el HTML sobre
si mismo antes de asignar el valor final.
Codigo con error:
container.innerHTML = container.innerHTML = filteredReservations?.length
Solucion:
container.innerHTML = filteredReservations?.length
Error 5 src/components/Sidebar.js — Acumulacion de event listeners
duplicados
Severidad: Media
Cada vez que se renderiza el Sidebar se anade un nuevo listener al boton de logout sin eliminar el anterior,
acumulando multiples listeners con cada navegacion.
Solucion:
setTimeout(() => {
const btn = document.querySelector("#logoutBtn");
if (btn) {
btn.replaceWith(btn.cloneNode(true));
document.querySelector("#logoutBtn").addEventListener("click", () => {
removeSession();
navigateTo("/");
});
}
}, 0);
Error 6 src/router/router.js — NotFoundView nunca registrada
Severidad: Baja
El archivo src/views/notFound.js existe pero no se importa ni se usa en el router. Las rutas desconocidas
muestran el login en lugar de la pagina 404.
Solucion:
import notFoundView from "@/views/notFound";
const view = routes[path] || notFoundView;
Resumen
#
Archivo
Severidad
Problema
1
src/components/Sidebar.js
Alta
removeSession() no se llama al hacer logout
2
src/router/router.js
Alta
Sin proteccion de rutas autenticadas
3
src/services/reservation.service.js
Alta
Nombre de funcion incorrecto
4
src/controllers/home.controller.js
Media
Doble asignacion a container.innerHTML
5
src/components/Sidebar.js
Media
Acumulacion de event listeners duplicados
6
src/router/router.js
Baja
NotFoundView no registrada en el router
