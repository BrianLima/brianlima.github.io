// Replaces wow.js: elements with the "wow" class stay hidden until they scroll
// into view, then play their animate.css animation after an optional data-wow-delay.
(function () {
  const REVEAL_SELECTOR = ".wow";
  const DELAY_ATTRIBUTE = "data-wow-delay";
  const UNITLESS_NUMBER = /^\d*\.?\d+$/;

  if (!("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  const observer = new IntersectionObserver(revealVisibleEntries);

  elements.forEach((element) => {
    if (isInViewport(element)) {
      reveal(element);
      return;
    }

    hide(element);
    observer.observe(element);
  });

  function isInViewport(element) {
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

  function revealVisibleEntries(entries) {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
  }

  function hide(element) {
    element.style.visibility = "hidden";
    element.style.animationName = "none";
  }

  function reveal(element) {
    const delay = element.getAttribute(DELAY_ATTRIBUTE);
    if (delay) element.style.animationDelay = withSecondsUnit(delay);

    element.style.visibility = "visible";
    element.style.animationName = "";
  }

  function withSecondsUnit(delay) {
    return UNITLESS_NUMBER.test(delay) ? `${delay}s` : delay;
  }
})();
