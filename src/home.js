import logo from './logo';

function home() {
    const home = document.createElement('div');
    const description = document.createElement('p');
    const menuBtn = document.createElement('button');

    home.setAttribute('id', 'home');
    home.setAttribute('class', 'containerSections');
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.setAttribute('type', 'button');

    description.innerText = 'Scelerisque varius morbi enim nunc faucibus a pellentesque sit.';
    menuBtn.innerText = 'Menu';

    home.appendChild(logo());
    home.appendChild(description);
    home.appendChild(menuBtn);

    return home;
}

export default home;
