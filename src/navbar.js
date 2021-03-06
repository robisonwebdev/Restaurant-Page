function navbar() {
    const navbar = document.createElement('div');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const about = document.createElement('li');
    
    navbar.setAttribute('id', 'navbar');
    ul.setAttribute('id', 'linkContainer');
    home.setAttribute('id', 'homeLink');
    menu.setAttribute('id', 'menuLink');
    about.setAttribute('id', 'aboutLink');
    
    home.innerText = 'HOME';
    menu.innerText = 'MENU';
    about.innerText = 'ABOUT';
    
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(about);
    
    navbar.appendChild(ul);

    return navbar;
}

export default navbar;