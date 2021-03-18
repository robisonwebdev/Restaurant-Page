import navbar from './navbar';
import content from './content';
import developedBy from './footer';

const indexJS = (function() {
    const container = document.querySelector('#container');

    container.appendChild(navbar);
    container.appendChild(content());
    container.appendChild(developedBy('David Robison', 'https://github.com/robisonwebdev'));

    const homeNav = document.querySelector('#homeLink');
    const menuNav = document.querySelector('#menuLink');
    const aboutNav = document.querySelector('#aboutLink');
    const menuBtn = document.querySelector('#menuBtn');
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');

    function homeDisplay() {
        home.style.display = 'flex';
        menu.style.display = 'none';
        about.style.display = 'none';
    }

    function menuDisplay() {
        home.style.display = 'none';
        menu.style.display = 'flex';
        about.style.display = 'none';
    }

    function aboutDisplay() {
        home.style.display = 'none';
        menu.style.display = 'none';
        about.style.display = 'flex';
    }

    homeDisplay();


    homeNav.addEventListener('click', () => {
        homeDisplay();
    })

    menuNav.addEventListener('click', () => {
        menuDisplay();
    })

    aboutNav.addEventListener('click', () => {
        aboutDisplay();
    })

    menuBtn.addEventListener('click', () => {
        menuDisplay();
    })
})();