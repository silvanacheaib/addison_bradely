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
// jQuery(document).ready(function($){
//     $('.awb-swiper-carousel').each(function(){
//         var swiper = this.swiper; // get Swiper instance
//         if(swiper){
//             swiper.params.slidesPerView = 'auto'; // set slides per view to auto
//             swiper.update(); // apply the change
//         }
//     });
// });
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