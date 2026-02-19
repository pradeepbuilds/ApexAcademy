document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active'); // Add active class for X animation if CSS supports
        });
    }

    // Close menu when clicking any link
    navLinks.forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if(mobileMenuBtn) mobileMenuBtn.classList.remove('active');
    }));

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        }
    });

    // --- 3. Batch Details Data ---
    const courseDetails = {
        'foundation': {
            title: "8th - 10th Foundation",
            timing: "4:00 PM - 6:30 PM",
            start: "15th June 2025",
            days: "Mon - Sat",
            mode: "Offline",
            faculty: "Prof. Sharma & Team",
            duration: "10 Months",
            syllabus: "NCERT & State Board",
            fees: "₹ 25,000 / Year",
            seats: "Last 5 Seats"
        },
        'commerce': {
            title: "11th & 12th Commerce",
            timing: "7:00 AM - 10:00 AM",
            start: "1st July 2025",
            days: "Daily (Mon-Sat)",
            mode: "Hybrid",
            faculty: "CA. Rahul Verma",
            duration: "1 Year",
            syllabus: "Accounts, Eco, OCM",
            fees: "₹ 30,000 / Year",
            seats: "Closing Soon"
        },
        'jee_neet': {
            title: "JEE / NEET Prep",
            timing: "8:00 AM - 1:00 PM",
            start: "10th June 2025",
            days: "6 Days/Week",
            mode: "Offline Intensive",
            faculty: "Ex-IITians Team",
            duration: "2 Years",
            syllabus: "PCB / PCM + Boards",
            fees: "Enquire for Fees",
            seats: "Entrance Test Req."
        },
        'computer': {
            title: "Computer Mastery",
            timing: "5:00 PM - 7:00 PM",
            start: "Every Monday",
            days: "MWF or TTS",
            mode: "Practical Lab",
            faculty: "Mr. Deshmukh",
            duration: "3 Months",
            syllabus: "Python, Java, Web",
            fees: "₹ 8,000",
            seats: "10 per batch"
        }
    };

    // --- 4. Modal Logic ---
    const modal = document.getElementById('batch-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const viewBtns = document.querySelectorAll('.view-details-btn');
    const whatsappBtn = document.getElementById('modal-whatsapp-btn');

    // UI Elements inside Modal
    const ui = {
        title: document.getElementById('modal-title'),
        timing: document.getElementById('modal-timing'),
        start: document.getElementById('modal-start'),
        days: document.getElementById('modal-days'),
        mode: document.getElementById('modal-mode'),
        faculty: document.getElementById('modal-faculty'),
        duration: document.getElementById('modal-duration'),
        syllabus: document.getElementById('modal-syllabus'),
        fees: document.getElementById('modal-fees'),
        seats: document.getElementById('modal-seats')
    };

    // Open Modal
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const courseKey = btn.getAttribute('data-course');
            const data = courseDetails[courseKey];

            if(data) {
                // Populate Modal Fields
                ui.title.textContent = data.title;
                ui.timing.textContent = data.timing;
                ui.start.textContent = data.start;
                ui.days.textContent = data.days;
                ui.mode.textContent = data.mode;
                ui.faculty.textContent = data.faculty;
                ui.duration.textContent = data.duration;
                ui.syllabus.textContent = data.syllabus;
                ui.fees.textContent = data.fees;
                ui.seats.textContent = data.seats;

                // Dynamic WhatsApp Link
                const phone = "919876543210";
                const message = `Hi, I am interested in ${data.title}. Please share details.`;
                whatsappBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

                // Show Modal & Disable Body Scroll
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close Modal Logic
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    closeModalBtn.addEventListener('click', closeModal);
    
    // Close on Outside Click
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});