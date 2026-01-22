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
    const targetEmail = "silvanacheaib@gmail.com";

    if (!form) return;

    form.addEventListener('submit', function (event) {
        // 1. Stop the form from auto-submitting/reloading
        event.preventDefault();

        // 2. Collect data to match your Template Variables (Image 2)
        const templateParams = {
            name: document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value,
            email: document.getElementById('contact_us_email_field').value,
            message: document.getElementById('contact_us_message_field').value,
            title: "Website Inquiry"
        };

        // 3. Send to EmailJS with specific validation
        emailjs.send('service_x09tvpj', 'template_lt36b18', templateParams)
            .then(function(response) {
                // Check if the server actually accepted it (Status 200)
                if (response.status === 200) {
                    console.log('EmailJS Success:', response);
                    
                    // Display the specific confirmation alert you asked for
                    alert(`Message successfully verified and sent to ${targetEmail}.`);
                    
                    // Manually trigger the Avada success message visibility if desired
                    const successNotice = document.querySelector('.fusion-form-response-success');
                    if (successNotice) successNotice.style.display = 'block';
                    
                    form.reset();
                }
            })
            .catch(function(error) {
                console.error('EmailJS Error:', error);
                alert("Critical Error: The email could not be sent. Details: " + JSON.stringify(error));
            });
    });
});

