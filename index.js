// document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const nav = document.querySelector('nav');
//     menuToggle.addEventListener('change', function () {
//         if (this.checked) {
//             nav.style.left = "0";
//         } else {
//             nav.style.left = "-100%";
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Function to hide all sections
    function hideAllSections() {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Function to show a specific section
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Attach click event listeners to nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            
            const targetSection = this.getAttribute('href').substring(1) + 'Content'; // Assuming href attributes are #home, #about, etc.
            hideAllSections();
            showSection(targetSection);
        });
    });
});