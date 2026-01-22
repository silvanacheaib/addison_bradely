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



//
(function() {
    console.log("EmailJS Debug: Script initialized...");

    setTimeout(function() {
        // Specifically targeting the Avada form ID from your HTML
        const form = document.querySelector('.fusion-form-294');
        const targetEmail = "silvanacheaib@gmail.com";

        if (!form) {
            console.error("EmailJS Debug: CRITICAL - Form '.fusion-form-294' not found on page!");
            return;
        }

        console.log("EmailJS Debug: Form found. Listening for submit button click...");

        // Target the submit button specifically
        const submitBtn = form.querySelector('button[type="submit"]');

        submitBtn.addEventListener('click', function(e) {
            console.log("EmailJS Debug: Submit button clicked.");

            // Manually check validity to avoid the 'checkValidity' error
            const emailInput = document.getElementById('contact_us_email_field');
            if (!emailInput.value || !form.checkValidity()) {
                console.warn("EmailJS Debug: Form validation failed. Please fill required fields.");
                return; 
            }
            
            e.preventDefault();
            e.stopImmediatePropagation();

            console.log("EmailJS Debug: Validation passed. Preparing data...");

            const templateParams = {
                name: document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value,
                email: emailInput.value,
                message: document.getElementById('contact_us_message_field').value,
                title: "Website Inquiry"
            };

            console.log("EmailJS Debug: Sending to EmailJS with params:", templateParams);

            emailjs.send('service_x09tvpj', 'template_lt36b18', templateParams)
                .then(function(response) {
                    console.log("EmailJS Debug: SUCCESS! Status:", response.status, "Text:", response.text);
                    alert(`Confirmation: Message verified and sent to ${targetEmail}`);
                    
                    // Force the Avada success message to appear visually
                    const successBox = document.querySelector('.fusion-form-response-success');
                    if (successBox) successBox.style.display = 'block';
                })
                .catch(function(err) {
                    console.error("EmailJS Debug: FAILED to send. Error details:", err);
                    alert("Verification Failed: " + JSON.stringify(err));
                });
        });
    }, 1500); // Wait for page to fully settle
})();