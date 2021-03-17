import home from './home';
import menu from './menu';
import about from './about';

const contentDiv = document.createElement('div');
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const aboutDiv = document.createElement('div');

contentDiv.setAttribute('id', 'content');

homeDiv.appendChild(home);
menuDiv.appendChild(menu('Pizza', 'Best pizza ever!', '$12'));
aboutDiv.appendChild(about);

contentDiv.appendChild(homeDiv);
contentDiv.appendChild(menuDiv);
contentDiv.appendChild(aboutDiv);

export default contentDiv;