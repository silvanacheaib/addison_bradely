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

(function() {
    console.log("EmailJS Debug: Checking for SDK...");

    const initEmailJS = setInterval(function() {
        if (typeof emailjs !== 'undefined') {
            console.log("EmailJS Debug: SDK found! Initializing form listeners...");
            clearInterval(initEmailJS);
            setupForm();
        }
    }, 500);

    function setupForm() {
        const formElement = document.querySelector('.fusion-form-294');
        //const targetEmail = "info@abradley.ae";
        //const targetEmail = "scheaib@hotmail.com";

        if (!formElement) return;

        const submitBtn = formElement.querySelector('button[type="submit"]');

        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const templateParams = {
                name: document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value,
                email: document.getElementById('contact_us_email_field').value,
                phone: document.getElementById('contact_us_phone_number_field').value,
                message: document.getElementById('contact_us_message_field').value,
                title: "Website Inquiry"
            };

            console.log("EmailJS Debug: Sending...", templateParams);

            //emailjs.send('service_x09tvpj', 'template_lt36b18', templateParams)
            emailjs.send('service_1dprf9n', 'template_lt36b18', templateParams)
            
                .then(function(response) {
                    console.log("EmailJS Debug: SUCCESS!", response.status);
                    // alert(`Message verified and sent to ${targetEmail}`);
                    
                    // Show Avada success box (Image 4)
                    const successBox = document.querySelector('.fusion-form-response-success');
                    if (successBox) successBox.style.display = 'block';
                })
                .catch(function(err) {
                    console.error("EmailJS Debug: FAILED", err);
                    // alert("Error: " + JSON.stringify(err));
                });
        });
    }
})();