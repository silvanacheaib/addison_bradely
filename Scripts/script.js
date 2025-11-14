
// Simple check until elements exist
function setupSearch() {
    console.log("⏳ Checking for elements...");

    const searchIcon = document.getElementById("searchIcon");
    const searchBox = document.getElementById("searchBoxContainer");

    if (!searchIcon || !searchBox) {
        console.log("❌ Elements not found yet… retrying");
        setTimeout(setupSearch, 500);
        return;
    }

    console.log("✅ Elements found. Setting up click event.");

    searchIcon.addEventListener("click", function () {
        console.log("➡️ searchIcon clicked!");

        // Toggle class (show/hide)
        searchBox.classList.toggle("visible");

        console.log("📦 searchBoxContainer is now:",
            searchBox.classList.contains("visible") ? "VISIBLE" : "HIDDEN"
        );
    });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("🌐 DOM loaded. Starting setup...");
    setupSearch();
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