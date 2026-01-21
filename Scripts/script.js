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

  // Select all elements with dir="rtl"
  document.querySelectorAll('[dir="rtl"]').forEach(el => {
    // Replace "كسب ثقتك" with a span-wrapped version
    el.innerHTML = el.innerHTML.replace('كسب ثقتك', '<span id="blue_text">كسب ثقتك</span>');
  });
// document.addEventListener("DOMContentLoaded", function() {
//   // Optional: Run only if page language is English
//   const htmlLang = document.documentElement.lang.toLowerCase();
//   if (htmlLang !== "en" && htmlLang !== "en-us" && htmlLang !== "en-gb") return;

//   const heading = document.querySelector(".aboutUsIntro .fusion-title-heading");
//   if (!heading) return;

//   const text = heading.textContent;

//   // Split text into words + spaces (preserves all spacing!)
//   const parts = text.split(/(\s+)/);

//   const start = 5; 
//   const end = 8;
//   let wordIndex = 0;

//   const wrapped = parts
//     .map(part => {
//       if (!part.trim()) return part; // keep spaces untouched

//       wordIndex++;

//       if (wordIndex === start) return '<span id="blue_text">' + part;
//       if (wordIndex > start && wordIndex < end) return part;
//       if (wordIndex === end) return part + '</span>';

//       return part;
//     })
//     .join('');

//   heading.innerHTML = wrapped;
// });



document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".fusion-title-heading");

    if (heading) {
        heading.innerHTML = heading.innerHTML.replace(
            /Our Team/i,
            '<span id="blue_text">Our Team</span>'
        );
    }
});
document.querySelectorAll('.textEditorButton').forEach(button => {
    const textElement = button.querySelector('.fusion-button-text');
    const text = textElement ? textElement.textContent.trim() : "";

    if (!text) {
        button.style.display = "none";
    }
});


document.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('form.fusion-form');
  if (!form) return;

  let isSubmitting = false;

  form.addEventListener('submit', function (e) {

    // Let Avada do validation first
    if (!form.checkValidity()) {
      return;
    }

    e.preventDefault();

    if (isSubmitting) return;
    isSubmitting = true;

    emailjs.sendForm(
      'service_x09tvpj',
      'template_lt36b18',
      form
    ).then(function () {

      // Avada-style success message
      const success = document.createElement('div');
      success.className = 'fusion-form-response fusion-form-response-success';
      success.innerText = 'Thank you! Your message has been sent.';
      form.appendChild(success);

      form.reset();
      isSubmitting = false;

    }).catch(function (error) {

      console.error(error);

      const errorBox = document.createElement('div');
      errorBox.className = 'fusion-form-response fusion-form-response-error';
      errorBox.innerText = 'Something went wrong. Please try again.';
      form.appendChild(errorBox);

      isSubmitting = false;
    });

  });

});

