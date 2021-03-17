import home from './home';
import menu from './menu';
import about from './about';

const contentDiv = document.createElement('div');
const menuDiv = document.createElement('div');

contentDiv.setAttribute('id', 'content');
menuDiv.setAttribute('id', 'menu');

menuDiv.appendChild(menu('Pizza', 'Best pizza ever!', '$12'));
menuDiv.appendChild(menu('Donut', 'Very Round', '$2.50'));

contentDiv.appendChild(home);
contentDiv.appendChild(menuDiv);
contentDiv.appendChild(about);

export default contentDiv;