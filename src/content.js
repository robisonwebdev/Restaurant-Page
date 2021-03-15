import home from './home';
import menu from './menu';
import about from './about';

const content = document.createElement('div');

content.setAttribute('id', 'content');

content.appendChild(home);
// content.appendChild(menu);
content.appendChild(about);

export default content;