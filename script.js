const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const skillTitle = document.querySelector('.what-i-can');
const submitBtn = document.getElementById('submit');
const socialCon = document.querySelectorAll('#social-contacts');
const aboutInfo = document.querySelector('.about-info');
const aboutTitle = document.querySelector('.about-title-me')
const introFront = document.querySelector('.intro-front');
const tagLine = document.querySelector('.tag-line');
const projectTitle = document.querySelector('.project-title');
const projectInfo = document.querySelectorAll('.image-info');
const btn = document.querySelector('.btn');
const toggleMoon = document.getElementById('toggle-moon');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high-fill')) {
        // Light mode styles
        body.style.background = '';
        body.style.color = '';
        body.style.transition = '1s';
        home.style.background = '#f1ecec';
        about.style.background = '#f1ecec';
        skills.style.background = '#f1ecec';
        projects.style.background = '#f1ecec';
        skillTitle.style.color = '';
        aboutInfo.style.color = '';
        aboutTitle.style.color = '';
        introFront.style.color = '';
        tagLine.style.color = '';
        projectTitle.style.color = '';
        btn.style.background = '';
        btn.style.color = '';
        toggle.style.color = '';

    } else {
        // Dark mode styles
        body.style.background = '#262626';
        body.style.transition = '1s';
        home.style.background = '#262626';
        about.style.background = '#262626';
        skills.style.background = '#262626';
        projects.style.background = '#262626';
        home.style.transition = '1s';
        about.style.transition = '1s';
        skills.style.transition = '1s';
        projects.style.transition = '1s';
        skillTitle.style.color = '#fff';
        aboutInfo.style.color = '#fff';
        aboutTitle.style.color = '#fff';
        introFront.style.color = '#fff';
        tagLine.style.color = '#fff';
        projectTitle.style.color = '#fff';
        btn.style.background = '#FEBE10';
        btn.style.color = '#262626';
        toggle.style.color = '#fff';
    }
});

// Social contacts toggle
socialCon.forEach(function (socialCon) {
    toggle.addEventListener('click', function () {
        if (this.classList.contains('bi-brightness-high-fill')) {
            socialCon.style.color = '#262626';
        } else {
            socialCon.style.color = '#fff';
        }
    });
});

// Project info toggle
projectInfo.forEach(function (projectInfo) {
    toggle.addEventListener('click', function () {
        if (this.classList.contains('bi-brightness-high-fill')) {
            projectInfo.style.color = '#262626';
        } else {
            projectInfo.style.color = '#fff';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));