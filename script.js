document.addEventListener("DOMContentLoaded", function () {
    
    // Select the admission form
    const admissionForm = document.getElementById("admissionForm");

    // Handle form submission
    if (admissionForm) {
        admissionForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent page reload

            // Collect form data (Optional: Can be sent to an API or CRM later)
            const studentName = document.getElementById("studentName").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const studentClass = document.getElementById("studentClass").value;

            // Simple validation fallback
            if (studentName === "" || phoneNumber === "" || studentClass === "") {
                alert("Please fill all required fields.");
                return;
            }

            if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            // Success Alert intended for parents/students
            alert("Thank you, " + studentName + "! We have received your enquiry. Our team will contact you shortly on " + phoneNumber + ".");

            // Reset the form after successful submission
            admissionForm.reset();
        });
    }

    // Smooth Scrolling for anchor links (safeguard for cross-browser support)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Skip if the href is just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                // Scroll accounting for sticky header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});