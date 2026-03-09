// document.getElementById("year").textContent = new Date().getFullYear();
import { productDescriptions } from "./products.js";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}

// Aktywacja portalu przy kliknięciu (krótki flash, potem przejście)
document.querySelectorAll(".door").forEach((door) => {
  door.addEventListener("click", (e) => {
    // pozwól animacji zagrać moment przed przejściem
    e.preventDefault();

    door.classList.add("activating");
    const href = door.getAttribute("href");

    setTimeout(() => {
      window.location.href = href;
    }, 260);
  });
});


(function () {
  const setHeaderH = () => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  };

  window.addEventListener("load", setHeaderH);
  window.addEventListener("resize", setHeaderH);
})();



const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalBuyLink = document.getElementById("modal-buy-link");
const modalClose = document.querySelector(".modal-close");
const modalImage = document.getElementById("modal-image");

const modalContent = document.querySelector(".product-modal-content");

if (modal && modalTitle && modalDescription && modalBuyLink) {
  document.querySelectorAll("[data-product]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const key = btn.dataset.product;
      const product = productDescriptions[key];

      if (!product) return;

      modalTitle.textContent = product.title;
      modalDescription.innerHTML = product.description;
      modalBuyLink.href = product.buyUrl;
      modalImage.src = product.image;
      modalImage.alt = product.title;    

      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      
      if (modalContent) {
        modalContent.scrollTop = 0;
      }       
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  });
}
