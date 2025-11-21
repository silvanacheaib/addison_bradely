document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchBoxContainer = document.getElementById('searchBoxContainer');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            if(searchBoxContainer){
                searchBoxContainer.classList.add('visible');
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
  // Run ONLY if the page language is English
  const htmlLang = document.documentElement.lang.toLowerCase();
  if (htmlLang !== "en" && htmlLang !== "en-us" && htmlLang !== "en-gb") return;

  const heading = document.querySelector(".aboutUsIntro .fusion-title-heading");
  if (heading) {
    const text = heading.textContent.trim();
    const words = text.split(/\s+/);

    const start = 5;
    const end = 8;

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

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".fusion-title-heading");

    if (heading) {
        heading.innerHTML = heading.innerHTML.replace(
            /Our Team/i,
            '<span id="blue_text">Our Team</span>'
        );
    }
});