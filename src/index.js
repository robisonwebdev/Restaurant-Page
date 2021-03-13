import navbar from './navbar';
import container from './container';
import footer from './footer';

const content = document.querySelector('#content');

content.appendChild(navbar);
content.appendChild(container);
content.appendChild(footer);