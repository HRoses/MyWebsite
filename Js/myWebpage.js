function scrollHeader() {
    const homePage = document.getElementById('home');
    window.scrollTo({
        top: homePage.offsetTop,
        behavior: 'smooth'
    });
}

function scrollAbout() {
    const aboutPage = document.getElementById('about');
    window.scrollTo({
        top: aboutPage.offsetTop,
        behavior: 'smooth'
    });
}

function scrollProject() {
    const projectPage = document.getElementById('project');
    window.scrollTo({
        top: projectPage.offsetTop,
        behavior: 'smooth'
    });
}


function scrollContact() {
    const contactPage = document.getElementById('contact');
    window.scrollTo({
        top: contactPage.offsetTop,
        behavior: 'smooth'
    });
}


const animations = document.querySelectorAll('.addAnimation');
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting &&
            entry.target.classList.contains('addAnimation')) {
            entry.target.classList.add('anim');
        }

    });
});

animations.forEach(function (element) {
    observer.observe(element);
});


const toggleIcon = document.querySelector('.toggle-light');
const root = document.documentElement;
const nameBackgroundPicture = document.querySelector('.left h1');
let lightOn = false;
function toggleLights() {
    if (lightOn === true) {
        toggleIcon.innerHTML = `<i class="fas fa-sun" onclick="toggleLights()"></i>`;
        root.style.setProperty('--text-maincolor', 'white');
        root.style.setProperty('--body-background', 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)');
        // root.style.setProperty('--tertiary-color', '#2d2d30');
        root.style.setProperty('--tertiary-color', '#1f2f41');
        nameBackgroundPicture.style.background = 'url("../img/whitepattern.png")'; 
        nameBackgroundPicture.style.webkitBackgroundClip = "text";
        nameBackgroundPicture.style.backgroundPosition = '12.5rem 125rem';
        lightOn = false;
    } else {
        lightOn = true;
        toggleIcon.innerHTML = `<i class="fa-solid fa-moon" onclick="toggleLights()"></i>`;
        root.style.setProperty('--text-maincolor', 'black');
        root.style.setProperty('--body-background', 'white');
        root.style.setProperty('--tertiary-color', 'white');
        nameBackgroundPicture.style.background = 'url("../img/blackpattern.png")';
        nameBackgroundPicture.style.webkitBackgroundClip = "text";
        nameBackgroundPicture.style.backgroundPosition = '12.5rem 125rem';
    }
};

// stand alone function for about page
const aboutPageAnim = document.getElementById('lang');
let isPlayed = false; // to only play once per re-load. 
const observer1 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        const liElements = document.querySelectorAll('.skill-list li');
        // const aboutPageScroll = document.querySelector('.about-scroll');
        if (entry.isIntersecting && !isPlayed) {
            // animation: moveFromTop 0.6s linear forwards;
            function slidingTiles() {
                // aboutPageScroll.style.opacity = 0;
                // aboutPageScroll.style.animation = 'moveFromTop 0.6s linear forwards';
                // aboutPageScroll.style.animationDelay = '0.5s';
                for (let i = 0; i < liElements.length; i++) {
                    liElements[i].style.opacity = 0;
                    liElements[i].style.transition = 'transform 0.7s ease ,background 0.5s';
                    liElements[i].style.transform = "translateY(-40px)";
                    setTimeout(function (i) {
                        liElements[i].style.opacity = 1;
                        liElements[i].style.transform = "translateY(0)";
                    }, i * 400, i);
                }

            }
            slidingTiles();
            isPlayed = true;
        }
    });
});
observer1.observe(aboutPageAnim);



const contactPage = document.getElementById('contactLeft');
const observe2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        const spheresAnimation = document.querySelectorAll('.spheres li');
        // add the footer animation as well 
        const contactFooter = document.querySelector('.contact-footer');
        if (entry.isIntersecting) {
            contactFooter.classList.add('anim');
            let i = 1;
            spheresAnimation.forEach(function (sphere) {
                i++;
                sphere.style.animation = 'circle 5s linear infinite';
                sphere.style.animationDelay = `${i}s`;
            })
        }
    })
});

observe2.observe(contactPage);


