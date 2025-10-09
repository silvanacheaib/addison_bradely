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
