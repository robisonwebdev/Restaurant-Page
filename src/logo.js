function logo() {
    const image = document.createElement('img');

    image.setAttribute('class', 'redBresaola');
    image.setAttribute('src', './images/redBresaola1.png');
    image.setAttribute('alt', 'Red Bresaola Title with red cow head below');

    return image;
}

export default logo;