
document.addEventListener('DOMContentLoaded', function() {
    function hideAllSections() {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetSection = this.getAttribute('href').substring(1) + 'Content'; 
            hideAllSections();
            showSection(targetSection);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function hideAllSections() {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetSection = this.getAttribute('href').substring(1) + 'Content'; 
            hideAllSections();
            showSection(targetSection);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("T6Qwgnncfx-bMu0hd"); 

    const heartButton = document.getElementById('heartButton');

    heartButton.addEventListener('click', function() {

        if (localStorage.getItem('heartSent') === 'true') {
            alert('You have already sent your love!');
            heartButton.classList.add('active');
            return;
        }

        emailjs.send("service_h6q3giu", "template_euer46g", {
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            heartButton.classList.add('active');
            localStorage.setItem('heartSent', 'true');
            alert('Heart sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send heart. Please try again.');
        });
    });
});

