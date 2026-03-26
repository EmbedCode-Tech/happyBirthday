html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at top, #1a001f, #000);
  color: white;
  overflow-x: hidden;
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 4rem;
  color: #ff4b7d;
}

.name {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* BUTTON */
button {
  padding: 12px 30px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(45deg, #ff4b7d, #ff758c);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #ff4b7d;
}

/* SECTIONS */
section {
  min-height: 100vh;
  padding: 60px 20px;
  text-align: center;
}

/* GLASS EFFECT */
.message, .gallery, .love, .final {
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  margin: 60px;
  backdrop-filter: blur(10px);
}

/* PHOTOS */
.photos img {
  width: 220px;
  border-radius: 15px;
  margin: 10px;
  transition: 0.4s;
}

.photos img:hover {
  transform: scale(1.1);
}

/* LOVE CARDS */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cards div {
  background: rgba(255,255,255,0.1);
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
}

/* FINAL MESSAGE */
.final-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #ff4b7d;
}

/* SCROLL ANIMATION */
.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: 1s;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

/* HEARTS */
.hearts::before {
  content: "❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️";
  position: fixed;
  top: -10%;
  width: 100%;
  text-align: center;
  animation: fall 10s linear infinite;
  opacity: 0.3;
}

@keyframes fall {
  0% { transform: translateY(-100px); }
  100% { transform: translateY(110vh); }
}
