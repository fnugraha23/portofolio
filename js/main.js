// Ambil semua elemen yang kita butuhkan
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const mainContent = document.querySelector("main");

// Fungsi untuk menutup menu (agar tidak mengulang kode)
const closeMenu = () => {
  if (navMenu.classList.contains("show-menu")) {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("active"); // Mengembalikan ikon ke hamburger
  }
};

// Logika untuk membuka/menutup menu saat ikon diklik
if (navToggle) {
  navToggle.addEventListener("click", (event) => {
    // Mencegah event klik menyebar ke elemen main
    event.stopPropagation();
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("active"); // Mengganti ikon hamburger/silang
  });
}

// Logika untuk menutup menu saat salah satu link di dalam menu diklik
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Logika untuk menutup menu saat mengklik area di luar menu
if (mainContent) {
  mainContent.addEventListener("click", closeMenu);
}
