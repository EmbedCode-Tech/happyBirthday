// Scroll to next section
function scrollToSection() {
  document.querySelector(".message").scrollIntoView({ behavior: "smooth" });
}

// Typing effect
const text = "You are the best thing that ever happened to me... I love you more than words can say ❤️";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 40);
  }
}

typingEffect();

// Reveal on scroll
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Final surprise
function showFinal() {
  document.getElementById("finalMessage").style.display = "flex";
}
