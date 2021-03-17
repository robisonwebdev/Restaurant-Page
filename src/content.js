import home from './home';
import menu from './menu';
import about from './about';

const contentDiv = document.createElement('div');
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const aboutDiv = document.createElement('div');

contentDiv.setAttribute('id', 'content');
homeDiv.setAttribute('id', 'home');
menuDiv.setAttribute('id', 'menu');
aboutDiv.setAttribute('id', 'about');

homeDiv.appendChild(home);
menuDiv.appendChild(menu('Pizza', 'Best pizza ever!', '$12'));
menuDiv.appendChild(menu('Donut', 'Very Round', '$2.50'));
aboutDiv.appendChild(about);

contentDiv.appendChild(homeDiv);
contentDiv.appendChild(menuDiv);
contentDiv.appendChild(aboutDiv);

export default contentDiv;