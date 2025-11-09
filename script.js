// ===== TAB NAVIGATION =====
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll(".tab-section");

if (navLinks && navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-section");
      showSection(target);

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

function showSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// ===== Animate Skill Bars (when opening Skills tab) =====
function animateSkills() {
  const skillBars = document.querySelectorAll(".fill");
  skillBars.forEach(bar => {
    const targetWidth = bar.dataset.width;
    bar.style.width = targetWidth + "%";
    bar.textContent = targetWidth + "%";
  });
}

const skillsNav = document.querySelector('.navbar a[data-section="skills"]');
if (skillsNav) {
  skillsNav.addEventListener("click", animateSkills);
}

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
      if (formMessage) {
        formMessage.style.color = "lightgreen";
        formMessage.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
      }
      this.reset();
    } else {
      if (formMessage) {
        formMessage.style.color = "red";
        formMessage.textContent = "⚠️ Please fill out all fields.";
      }
    }
  });
}

// ===== Light/Dark Mode Toggle =====
const toggleBtn = document.getElementById("modeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode"); // ✅ use "light-mode"
    const isLight = document.body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "🌞" : "🌙";
  });
}
// ===== Shooting Star / Starfield Animation =====
const canvas = document.createElement("canvas");
canvas.id = "starsCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1"; // behind everything
canvas.style.width = "100%";
canvas.style.height = "100%";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2,
  speed: Math.random() * 0.5 + 0.1,
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".intro-text");

  // Delay a bit after load for cinematic feel
  setTimeout(() => {
    elements.forEach((el) => el.classList.add("visible"));
  }, 400);
});
