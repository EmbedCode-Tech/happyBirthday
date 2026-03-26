// typing effect
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

// final message
function showFinal() {
  document.getElementById("finalMessage").style.display = "flex";
}
