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


const sidebarTabs = document.querySelectorAll(".sidebar-tab");
const tabPanels = document.querySelectorAll(".tab-panel");

sidebarTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    sidebarTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector("button");
    button.textContent = "धन्यवाद!";
    button.disabled = true;
  });
}
