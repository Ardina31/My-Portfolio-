document.addEventListener('DOMContentLoaded', () => {
  // Typed.js animation
  new Typed(".text", {
    strings: ["Frontend Developer", "AI Enthusiast", "Algo Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Highlight active link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
  });

  // Auto year update
  document.getElementById("year").textContent = new Date().getFullYear();
});
