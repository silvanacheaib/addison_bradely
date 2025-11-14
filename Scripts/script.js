document.addEventListener('DOMContentLoaded', function() {
  // Diagnostic helper
  function diag(msg, obj) {
    if (window.console) console.log('[SearchIconDiag]', msg, obj ?? '');
  }

  // Use event delegation so it still works if #searchIcon is replaced later
  document.addEventListener('click', function handler(e) {
    const clicked = e.target.closest && e.target.closest('#searchIcon');
    if (!clicked) return;
    // Prevent multiple handlers from running if something else also listens:
    // (you can remove this if you want other handlers to run)
    // e.stopPropagation();

    diag('searchIcon clicked', clicked);

    const searchBoxContainer = document.getElementById('searchBoxContainer');
    if (!searchBoxContainer) {
      diag('searchBoxContainer not found');
      return;
    }

    // Toggle instead of only add — gives better UX
    searchBoxContainer.classList.toggle('visible');

    // If you need to ensure it receives pointer events and appears above overlays:
    // (uncomment if needed)
    // searchBoxContainer.style.pointerEvents = 'auto';
    // searchBoxContainer.style.zIndex = 9999;
  });

  // Extra runtime checks (optional)
  const el = document.getElementById('searchIcon');
  if (!el) diag('Initial #searchIcon NOT found at DOMContentLoaded — maybe created later');
  else diag('#searchIcon present at DOMContentLoaded', el);
});

document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector(".aboutUsIntro .fusion-title-heading");
  if (heading) {
    // Get plain text (not HTML)
    const text = heading.textContent.trim();

    // Split into words (preserve punctuation as separate “words” if needed)
    const words = text.split(/\s+/);

    // Word positions to wrap (1-based index)
    const start = 5; // from word #5
    const end = 8;   // to word #8

    // Build the new HTML
    const wrapped = words
      .map((word, i) => {
        const index = i + 1;
        if (index === start) return '<span id="blue_text">' + word;
        if (index > start && index < end) return word;
        if (index === end) return word + '</span>';
        return word;
      })
      .join(' ');

    heading.innerHTML = wrapped;
  }
});

$('.providersImages .fusion-grid').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});