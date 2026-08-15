"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.getElementById("mainMenu");
const currentDate = document.getElementById("currentDate");
const currentYear = document.getElementById("currentYear");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!mainMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mainMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const today = new Date();

if (currentDate) {
  currentDate.textContent = new Intl.DateTimeFormat("ne-NP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(today);
}

if (currentYear) {
  currentYear.textContent = new Intl.NumberFormat("ne-NP", {
    useGrouping: false
  }).format(today.getFullYear());
}
