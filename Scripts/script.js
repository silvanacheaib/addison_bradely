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
  const form = document.querySelector('.fusion-form-294');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop default WordPress/Fusion submission temporarily

    // Prepare parameters to match your EmailJS template EXACTLY
    const templateParams = {
      name: document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value,
      email: document.getElementById('contact_us_email_field').value,
      message: document.getElementById('contact_us_message_field').value,
      // Add 'title' if you use it in your subject line
      title: "Website Inquiry" 
    };

    emailjs.send('service_x09tvpj', 'template_lt36b18', templateParams)
      .then(function() {
        console.log('SUCCESS!');
        // Now trigger the original form success UI if needed
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
});

