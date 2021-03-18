import logo from './logo';

const home = document.createElement('div');
const description = document.createElement('p');
const menuBtn = document.createElement('button');

home.setAttribute('id', 'home');
home.setAttribute('class', 'containerSections');
menuBtn.setAttribute('id', 'menuBtn');

description.innerText = 'Scelerisque varius morbi enim nunc faucibus a pellentesque sit.';
menuBtn.innerText = 'Menu';

home.appendChild(logo());
home.appendChild(description);
home.appendChild(menuBtn);

export default home;
