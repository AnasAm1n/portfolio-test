const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    document.querySelector('header nav').classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);
        
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn =>  {
            btn.classList.remove('active');
    });
    btn.classList.add('active');

   resumeDetails.forEach(detail =>  {
        detail.classList.remove('active');
});
resumeDetails[idx].classList.add('active');
});

});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => { 
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');

}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
})

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
})

const sections = document.querySelectorAll('section');

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add active class when in view
        } else {
            entry.target.classList.remove('active'); // Remove active class when out of view
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    section.classList.add('section-animate'); // Add initial class for animation
    observer.observe(section); // Start observing the section
});
