import navbar from './navbar';
import content from './content';
import footer from './footer';

const indexJS = (function() {
    const container = document.querySelector('#container');

    container.appendChild(navbar);
    container.appendChild(content);
    container.appendChild(footer);

    const homeNav = document.querySelector('#home');
    const menuNav = document.querySelector('#menu');
    const aboutNav = document.querySelector('#about');

    function homeDisplay() {
        homeNav.style.display = 'flex';
        menuNav.style.display = 'none';
        aboutNav.style.display = 'none';
    }

    homeDisplay();


})();

// const container = document.querySelector('#container');

// container.appendChild(navbar);
// container.appendChild(content);
// container.appendChild(footer);