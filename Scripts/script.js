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
// (function() {
//     console.log("EmailJS Debug: Script v3 Initialized...");

//     setTimeout(function() {
//         // Target the Avada form class explicitly
//         const formElement = document.querySelector('.fusion-form-294');
//         const targetEmail = "silvanacheaib@gmail.com";

//         if (!formElement) {
//             console.error("EmailJS Debug: ERROR - Form '.fusion-form-294' not found!");
//             return;
//         }
//         console.log("EmailJS Debug: Form found successfully.");

//         const submitBtn = formElement.querySelector('button[type="submit"]');

//         submitBtn.addEventListener('click', function(e) {
//             console.log("EmailJS Debug: Submit button clicked.");

//             // Manual validation check to avoid .checkValidity() crash
//             const emailVal = document.getElementById('contact_us_email_field').value;
//             if (!emailVal) {
//                 console.warn("EmailJS Debug: Email field is empty. Stopping.");
//                 return;
//             }

//             e.preventDefault();
//             e.stopImmediatePropagation();

//             // Prepare the data matching your EmailJS Template (Image 2)
//             const templateParams = {
//                 name: document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value,
//                 email: emailVal,
//                 message: document.getElementById('contact_us_message_field').value,
//                 title: "Website Contact"
//             };

//             console.log("EmailJS Debug: Attempting to send data...", templateParams);

//             emailjs.send('service_x09tvpj', 'template_lt36b18', templateParams)
//                 .then(function(response) {
//                     console.log("EmailJS Debug: SUCCESS SERVER RESPONSE:", response.status, response.text);
//                     alert(`SENT SUCCESSFULLY! Verification confirmed for ${targetEmail}`);
                    
//                     // Show the Avada success box visually (Image 4)
//                     const successBox = document.querySelector('.fusion-form-response-success');
//                     if (successBox) successBox.style.display = 'block';
//                 })
//                 .catch(function(err) {
//                     console.error("EmailJS Debug: SEND FAILED. Error details:", err);
//                     alert("Verification Failed. Error: " + JSON.stringify(err));
//                 });
//         });
//     }, 1500);
// })();


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
        const targetEmail = "silvanacheaib@gmail.com";

        if (!formElement) return;

        const submitBtn = formElement.querySelector('button[type="submit"]');

        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const templateParams = {
                name: document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value,
                email: document.getElementById('contact_us_email_field').value,
                message: document.getElementById('contact_us_message_field').value,
                title: "Website Inquiry"
            };

            console.log("EmailJS Debug: Sending...", templateParams);

            emailjs.send('service_x09tvpj', 'template_lt36b18', templateParams)
                .then(function(response) {
                    console.log("EmailJS Debug: SUCCESS!", response.status);
                    alert(`Message verified and sent to ${targetEmail}`);
                    
                    // Show Avada success box (Image 4)
                    const successBox = document.querySelector('.fusion-form-response-success');
                    if (successBox) successBox.style.display = 'block';
                })
                .catch(function(err) {
                    console.error("EmailJS Debug: FAILED", err);
                    alert("Error: " + JSON.stringify(err));
                });
        });
    }
})();