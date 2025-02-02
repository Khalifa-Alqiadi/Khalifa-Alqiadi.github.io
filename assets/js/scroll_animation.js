function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("loaded");
    } else {
      reveals[i].classList.remove("loaded");
    }
  }
}

window.addEventListener("scroll", reveal);
// Add mouseenter event listener for each section
var sections = document.querySelectorAll(".reveal");
sections.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    section.classList.add("loaded");
  });
});

// Trigger reveal for the hero section on page load
document.addEventListener("DOMContentLoaded", () => {
  reveal(); // Ensure the hero section gets revealed
});
