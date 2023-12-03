/*----------------------------------------------------scroll sections active----------------------------------------------------------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

/*----------------------------------------------------sticky navbar  ----------------------------------------------------------------------*/
let header =  document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*---------------------------------------------------- remove toggle icon navbar---------------------------------------------------------------*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

}


/*----------------------------------------------------toggle icon navbar----------------------------------------------------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*---------------------------------------------------- Scroll Reveal----------------------------------------------------------------------*/
ScrollReveal({
     reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
    });

    ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1 , .about-img ' , { origin: 'left' });
    ScrollReveal().reveal('.home-content p , .about-content ' , { origin: 'right' });

/*---------------------------------------------------- typed js----------------------------------------------------------------------*/


const typed = new Typed ('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Granphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const subject = document.getElementById("sub");
const message = document.getElementById("message");

function sendMail() {
    // Check if any of the fields is empty
    if (!name.value || !email.value || !phone.value || !subject.value || !message.value) {
        alert("Please fill in all fields.");
        return; // Stop the function if any field is empty
    }

    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Phone Number:  ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bemuslim26@gmail.com",
        Password: "FC6DB57C5011662FB6D554414A7668A51338",
        To: 'bemuslim26@gmail.com',
        From: "bemuslim26@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                alert("Message sent successfully!");
                form.reset();
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
