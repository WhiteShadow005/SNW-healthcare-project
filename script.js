document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // 🌙 Dark Mode / Light Mode Toggle
  // ================================

  const themeBtn = document.getElementById("theme-btn");

  // Check if the button exists
  if (themeBtn) {
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme on load
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeBtn.textContent = "☀️";
    } else {
      document.body.classList.remove("dark-mode");
      themeBtn.textContent = "🌙";
    }

    // Toggle when clicked
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // ================================
  // 🔍 Doctor Search Filter (Doctors Page)
  // ================================

  const searchInput = document.getElementById("doctor-search");
  const doctorCards = document.querySelectorAll(".doctor-card");

  if (searchInput && doctorCards.length > 0) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();

      doctorCards.forEach((card) => {
        const doctorName = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = doctorName.includes(searchTerm) ? "block" : "none";
      });
    });
  }

  // ================================
  // ✨ Scroll Reveal Effect
  // ================================
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
