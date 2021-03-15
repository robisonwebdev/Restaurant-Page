const backgroundImage = document.createElement('div');
const image = document.createElement('img');

backgroundImage.setAttribute('id', 'backgroundImage');
image.setAttribute('src', './images/backgroundImage.jpg');

backgroundImage.appendChild(image);

export default backgroundImage;