"use strict";

const menuButton = document.querySelector(".l-header__menu-button");
const drawerMenu = document.querySelector(".l-header__drawer");
const drawerLinks = document.querySelectorAll(".l-header__drawer a");

if (menuButton && drawerMenu) {
  const closeMenu = () => {
    menuButton.classList.remove("is-open");
    drawerMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");

    drawerMenu.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeMenu();
    }
  });
}