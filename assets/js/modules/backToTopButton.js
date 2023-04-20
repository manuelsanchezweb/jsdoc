/**
 * Initializes a 'Back to Top' button which appears when the user scrolls past a specified distance.
 * The button smoothly appears and disappears based on the scroll position.
 *
 * @module
 */

/**
 * Initializes the 'Back to Top' button functionality.
 *
 * @param {Object} options - The configuration object for the 'Back to Top' button.
 * @param {number} options.distanceScrolled - The distance scrolled before the button appears.
 * @param {number} options.delay - The delay in milliseconds before the button disappears.
 */

export function initBackToTopButton({ distanceScrolled, delay }) {
  const backToTopButton = document.querySelector("#back-to-top-btn");

  window.addEventListener("scroll", scrollTopButtonAppear);

  function scrollTopButtonAppear() {
    if (window.pageYOffset > distanceScrolled) {
      if (!backToTopButton.classList.contains("btnTopEntry")) {
        backToTopButton.classList.remove("btnTopExit");
        backToTopButton.classList.add("btnTopEntry");
        backToTopButton.style.display = "block";
      }
    } else {
      if (backToTopButton.classList.contains("btnTopEntry")) {
        backToTopButton.classList.remove("btnTopEntry");
        backToTopButton.classList.add("btnTopExit");
        setTimeout(function () {
          backToTopButton.style.display = "none";
        }, delay);
      }
    }
  }

  backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
    window.scrollTo(0, 0);
  }
}
