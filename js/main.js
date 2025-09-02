// Menampilkan & Menyembunyikan Menu
const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

// Tampilkan menu saat ikon hamburger diklik
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// Sembunyikan menu saat salah satu link menu diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});
