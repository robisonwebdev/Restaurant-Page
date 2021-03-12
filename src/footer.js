const footer = document.createElement('div');
const small = document.createElement('small');
const link = document.createElement('a');

footer.setAttribute('id', 'footer');
link.setAttribute('href', 'https://github.com/robisonwebdev');
link.setAttribute('target', '_blank');

small.innerText = 'Developed by ';
link.innerText = 'David Robison';

small.appendChild(link);
footer.appendChild(small);

export default footer;