// ==========================================================
// This file handles 3 things:
// 1) Opening/closing the mobile menu
// 2) Auto-changing the hero section slider
// 3) Showing a custom cursor when hovering the "Book a Table" section
// ==========================================================

// Wait until the whole page has loaded before running any code (safe practice)
document.addEventListener("DOMContentLoaded", function () {
  // ------------------------------------------------------
  // 1) Mobile menu toggle (clicking the hamburger icon opens/closes the menu)
  // ------------------------------------------------------
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    // If the "hidden" class is present, remove it — otherwise add it (toggle)
    mobileMenu.classList.toggle("hidden");
  });

  // ------------------------------------------------------
  // 2) Hero section slider
  // ------------------------------------------------------
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  let currentSlide = 0;

  function showSlide(index) {
    // First hide all slides by removing opacity-100 and adding opacity-0
    slides.forEach((slide) => slide.classList.remove("opacity-100"));
    slides.forEach((slide) => slide.classList.add("opacity-0"));

    // Reset all dots back to their normal (inactive) color
    dots.forEach((dot) => dot.classList.remove("bg-primary"));
    dots.forEach((dot) => dot.classList.add("bg-white/50"));

    // Show the slide we want
    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");

    // Highlight the matching dot
    dots[index].classList.remove("bg-white/50");
    dots[index].classList.add("bg-primary");
  }

  // Automatically move to the next slide every 5 seconds
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  let sliderInterval = setInterval(nextSlide, 5000);

  // Clicking a dot jumps directly to that slide
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      showSlide(currentSlide);

      // Reset the auto-timer whenever the user clicks manually
      clearInterval(sliderInterval);
      sliderInterval = setInterval(nextSlide, 5000);
    });
  });

  // ------------------------------------------------------
  // 3) Custom Cursor Effect
  // When the mouse moves over the "Book a Table" section, the normal
  // cursor is hidden and a circle cursor follows the mouse instead
  // ------------------------------------------------------
  const customCursor = document.getElementById("custom-cursor");
  const cursorSection = document.getElementById("book-table-section");

  // Move the custom cursor to wherever the mouse goes
  document.addEventListener("mousemove", function (e) {
    // Using transform instead of left/top because it's smoother (GPU accelerated)
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });

  // When the mouse enters the section, grow the cursor and show the "BOOK" text
  cursorSection.addEventListener("mouseenter", function () {
    customCursor.classList.add("cursor-active");
  });

  // When the mouse leaves the section, shrink the cursor back down
  cursorSection.addEventListener("mouseleave", function () {
    customCursor.classList.remove("cursor-active");
  });

  // ------------------------------------------------------
  // 4) Scroll Reveal Animation
  // Sections/cards fade in and slide up into place as they enter
  // the viewport while scrolling, instead of just appearing instantly
  // ------------------------------------------------------
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  // IntersectionObserver watches elements and tells us when they become visible
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Element is now visible on screen — trigger the animation
          entry.target.classList.add("reveal-visible");
          // Stop watching this element once it has animated in (better performance)
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // trigger when 15% of the element is visible
    }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });
});
