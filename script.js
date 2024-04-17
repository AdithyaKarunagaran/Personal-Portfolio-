console.log("Script is running");

//*! Open & close the navbar,navbar is closed when user toches outside of nav-link and click the nav-link
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.openNav = function() {
        navbar.style.left = "0"; //*! opening nav
    };

    window.closeNav = function() {
        navbar.style.left = "-100%";   //*! closing nav
    };

    document.addEventListener('click', function(event) { 
        const isClickInsideNavbar = navbar.contains(event.target);

        if (isClickInsideNavbar) {  
            closeNav();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            header.classList.add('fixed');
            
        } else {
            header.classList.remove('fixed');
        }
    });
});
const jobDescElement = document.getElementById('job-desc');
const jobDescriptions = ['Front End Developer', 'Full Stack Developer', 'Web Designer'];
let currentDescriptionIndex = 0;  
let letterIndex = 0;
let currentLetters = '';

function typeLetters() {
    if (letterIndex < jobDescriptions[currentDescriptionIndex].length) {
        currentLetters += jobDescriptions[currentDescriptionIndex].charAt(letterIndex);
        jobDescElement.textContent = currentLetters;
        letterIndex++;
        setTimeout(typeLetters, 100); //*! Adjust for typing speed
    } else {
        setTimeout(deleteLetters, 1000); //*! Wait before deleting
    }
}

function deleteLetters() {
    if (letterIndex > -1) {
        currentLetters = currentLetters.substring(0, letterIndex);
        jobDescElement.textContent = currentLetters;
        letterIndex--;
        setTimeout(deleteLetters, 50); //*! Adjust for deletion speed
    } else {
        currentDescriptionIndex = (currentDescriptionIndex + 1) % jobDescriptions.length;
        setTimeout(typeLetters, 100); //*! Wait before starting to type next description
    }
}
typeLetters(); //*! Start the typing effect on load function Calling

//*! SKILL BAR FILLING EFFECT WHENEVER IT COMES TO VIEW
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1 //*! Trigger when 10% of the item is visible
    };

// ?observer is like api to observe the content entry on screen */
    const animateFill = (entries, observer) => {  
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let filling = entry.target.querySelector('.filling');
                const value = filling.getAttribute('data-value');
                filling.style.setProperty('--fill-width', `${value}%`);
                filling.classList.add('animate-fill');
            } else {
                //*! Optional: Reset animation if you want it to trigger again when re-entering the viewport
                entry.target.querySelector('.filling').classList.remove('animate-fill');
                //*! Reset the width to trigger the animation again
                entry.target.querySelector('.filling').style.width = '0';
            }
        });
    };

    const observer = new IntersectionObserver(animateFill, observerOptions);

    document.querySelectorAll('.skill-item').forEach((item) => {
        observer.observe(item);
    });
});


//*! project Hovering effect
function slideInContent(element) {
    let content = element.querySelector('.project-content');
    if(content) {
        content.style.left = '0';
    }
}

function slideOutContent(element) {
    let content = element.querySelector('.project-content');
    if(content) {
        content.style.left = '-100%';
    }
};

//*! Get Message from User
(function() {
    emailjs.init("T6Qwgnncfx-bMu0hd");   //*! ? emailJS USER id
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    //*! Extract form inputs
    var name = document.getElementById('from_name').value;
    var email = document.getElementById('from_email').value;
    var message = document.getElementById('message').value;

    //*! Email validation regex pattern
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //*! Check if email is valid
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    //*! Send email using EmailJS
    emailjs.sendForm('service_rbe3z0l', 'template_fne7b5s', this) //? emailJS (Service id, Template ID)
        .then(function() {
            console.log('SUCCESS!');
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message, please try again.');
        });
});
  

//*! ERROR INDICATOIN
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.query === "getData") {

        //*! Asynchronous operation
        fetchData().then(data => {
            sendResponse({data: data});
        }).catch(error => {
            sendResponse({error: error.message});
        });
        return true; //*! Indicates you will respond asynchronously
    }
});
