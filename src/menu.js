function menu (titleValue, descriptionValue, priceValue) {
    const menuItem = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('h3');

    menuItem.setAttribute('class', 'menuItem');
    title.setAttribute('class', 'menuTitle');
    description.setAttribute('class', 'menuDescription');
    price.setAttribute('class', 'menuPrice');

    title.innerText = titleValue;
    description.innerText = descriptionValue;
    price.innerText = priceValue;

    menuItem.appendChild(title);
    menuItem.appendChild(description);
    menuItem.appendChild(price);

    return menuItem;
}

export default menu;