document.addEventListener("DOMContentLoaded", function () {

  // MUSIC PLAY ON CLICK
  document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("music").play();
  });

  // TYPING EFFECT
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

  // SCROLL REVEAL
  const sections = document.querySelectorAll(".hidden");

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const pos = sec.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  });

});

// FINAL MESSAGE
function showFinal() {
  document.getElementById("finalMessage").style.display = "flex";
}
