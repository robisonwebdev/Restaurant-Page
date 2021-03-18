function menu (titleValue, descriptionValue, priceValue) {
    const menuItem = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('h3');
    const borderBottom = document.createElement('div');

    menuItem.setAttribute('class', 'menuItem');
    title.setAttribute('class', 'menuTitle');
    description.setAttribute('class', 'menuDescription');
    price.setAttribute('class', 'menuPrice');
    borderBottom.setAttribute('class', 'borderBottom');

    title.innerText = titleValue;
    description.innerText = descriptionValue;
    price.innerText = priceValue;

    menuItem.appendChild(title);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuItem.appendChild(borderBottom);

    return menuItem;
}

export default menu;