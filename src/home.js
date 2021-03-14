const home = document.createElement('div');
const image = document.createElement('img');
const description = document.createElement('p');
const menuBtn = document.createElement('button');

home.setAttribute('id', 'home');
home.setAttribute('class', 'containerSections');
image.setAttribute('class', 'redBresaola');
image.setAttribute('src', './images/redBresaola1.png');
image.setAttribute('alt', 'Red Bresaola Title with red cow head below');
menuBtn.setAttribute('id', 'menuBtn');

description.innerText = 'Orci nulla pellentesque dignissim enim sit amet. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.';
menuBtn.innerText = 'Menu';

home.appendChild(image);
home.appendChild(description);
home.appendChild(menuBtn);

export default home;
