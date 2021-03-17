function developedBy(name, address) {
    const footer = document.createElement('div');
    const small = document.createElement('small');
    const link = document.createElement('a');

    footer.setAttribute('id', 'footer');
    link.setAttribute('href', `${address}`);
    link.setAttribute('target', '_blank');

    small.innerText = 'Developed by ';
    link.innerText = name;

    small.appendChild(link);
    footer.appendChild(small);

    return footer;
}

export default developedBy;