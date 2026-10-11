
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
  
   });
  
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("bg-black");
  } else {
    nav.classList.remove("bg-black");
  }
});


const text = "Front-End Developer | React.js | Angular | Bootstrap";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 80);
  }
}
typingEffect();


const projectCards = document.querySelectorAll("#projects .card");

window.addEventListener("scroll", () => {
  projectCards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
