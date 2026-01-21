// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = 
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// GSAP Animations
gsap.from(".animate", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});
