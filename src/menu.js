function menu (titleValue, descriptionValue, priceValue) {
    const menu = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('h3');

    menu.setAttribute('id', 'menu');
    title.setAttribute('class', 'menuTitle');
    description.setAttribute('class', 'menuDescription');
    price.setAttribute('class', 'menuPrice');

    title.innerText = titleValue;
    description.innerText = descriptionValue;
    price.innerText = priceValue;

    menu.appendChild(title);
    menu.appendChild(description);
    menu.appendChild(price);

    return menu;
}

export default menu;