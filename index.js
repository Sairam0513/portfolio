const phrases = [
  "Tech Enthusiastic",
  "Data Science Enthusiastic",
  "Passionate and Hardworking Techiee"
];

let index = 0;
let charIndex = 0;
let currentPhrase = "";
let isDeleting = false;
const typedText = document.getElementById("typed");

function typeEffect() {
  if (index >= phrases.length) index = 0;
  currentPhrase = phrases[index];

  if (isDeleting) {
    charIndex--;
    typedText.textContent = currentPhrase.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  } else {
    charIndex++;
    typedText.textContent = currentPhrase.substring(0, charIndex);
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
  typeEffect();
});

function navigate(page) {
  document.body.classList.remove("fade-in");
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = page;
  }, 500);
}
function toggleDetails(header) {
  const clickedCard = header.parentElement;
  const allCards = document.querySelectorAll(".project-card");

  allCards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove("active");
    }
  });

  clickedCard.classList.toggle("active");
}
