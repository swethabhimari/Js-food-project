// const hamburger = document.getElementById('hamburger');
//         const navLinks = document.getElementById('navLinks');

//         hamburger.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
//         });
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger animation
    navLinks.classList.toggle('active'); // Toggle nav-links visibility
});

    