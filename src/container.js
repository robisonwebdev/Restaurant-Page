import home from './home';
import menu from './menu';
import about from './about';

const container = document.createElement('div');

container.setAttribute('id', 'container');

// container.appendChild(home);
// container.appendChild(menu);
container.appendChild(about);

export default container;