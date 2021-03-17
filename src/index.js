import navbar from './navbar';
import content from './content';
import footer from './footer';

const indexJS = (function() {
    const container = document.querySelector('#container');
    const homeNav = document.querySelector('#home');
    const menuNav = document.querySelector('#menu');
    const aboutNav = document.querySelector('#about');

    function homeDisplay() {
        homeNav.classList.add('displayFlex');
        menuNav.classList.remove('displayFlex');
        aboutNav.classList.remove('displayFlex');
    }

    homeDisplay();
})();

// const container = document.querySelector('#container');

// container.appendChild(navbar);
// container.appendChild(content);
// container.appendChild(footer);