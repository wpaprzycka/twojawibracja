document.getElementById("year").textContent = new Date().getFullYear();

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


// Gumroad placeholdery – tu wstawisz prawdziwe linki
const gumroadLinks = {
  EMO_UKOJENIE: "https://gumroad.com/l/twoj-produkt-ukoje",
  EMO_REGULACJA: "https://gumroad.com/l/twoj-produkt-regulacja",
  EMO_CIALO: "https://gumroad.com/l/twoj-produkt-cialo",
  // GOD_...: "...",
  // CHAKRA_...: "...",
};

document.querySelectorAll("[data-gumroad]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const key = btn.getAttribute("data-gumroad");
    const url = gumroadLinks[key];

    if (!url) {
      alert("Brak linku Gumroad. Uzupełnij gumroadLinks w js/script.js");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
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
