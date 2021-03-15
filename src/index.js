import navbar from './navbar';
import content from './content';
import footer from './footer';

const container = document.querySelector('#container');

container.appendChild(navbar);
container.appendChild(content);
container.appendChild(footer);