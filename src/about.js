const about = document.createElement('div');
const image = document.createElement('img');
const sectionTitle = document.createElement('h2');
const info = document.createElement('p');

about.setAttribute('id', 'about');
about.setAttribute('class', 'containerSections');
image.setAttribute('id', 'redBresaola');
image.setAttribute('src', './images/redBresaola1.png');
image.setAttribute('alt', 'Red Bresaola Title with red cow head below');

sectionTitle.innerText = 'ABOUT';
info.innerText = 'Nullam condimentum nunc sed enim efficitur feugiat eu vel lacus. Fusce ut lobortis ante. Quisque ac posuere nibh. Nam tempus orci eget ante venenatis, in tincidunt felis laoreet. Cras mollis massa ante, a vehicula enim iaculis ac. Ut sed imperdiet enim. Nam ut iaculis metus. Nulla sapien lacus, facilisis vitae blandit sit amet, ultrices in libero. Integer mollis tellus urna, a euismod lorem bibendum fringilla. Vivamus sed felis ut tortor lacinia ornare. Integer sed vehicula ante. Vestibulum sodales tincidunt nisi, quis pulvinar elit pulvinar at.'
    
about.appendChild(image);
about.appendChild(sectionTitle);
about.appendChild(info);

export default about;