import home from './home';
import menu from './menu';
import about from './about';
import logo from './logo';

const contentDiv = document.createElement('div');
const menuDiv = document.createElement('div');

contentDiv.setAttribute('id', 'content');
menuDiv.setAttribute('id', 'menu');
menuDiv.setAttribute('class', 'containerSections');

menuDiv.appendChild(logo());
menuDiv.appendChild(menu('Picanha Porchetta Pork', 'Esse laborum id, non venison fugiat nisi cupidatat excepteur quis chislic boudin enim. Laborum qui nisi beef aliqua alcatra.', '$12'));
menuDiv.appendChild(menu('Sirloin Magna', ' Non tenderloin ex, capicola turducken id fatback labore drumstick adipisicing short loin.', '$22'));
menuDiv.appendChild(menu('Turducken Aliquip', ' In short loin burgdoggen swine pancetta ham turkey minim culpa consectetur tenderloin flank. Tempor magna ut nisi burgdoggen kevin eu aliquip kielbasa leberkas pork.', '$8'));
menuDiv.appendChild(menu('Tri-tip Aliqua Salami Spareribs', 'Voluptate filet mignon kevin reprehenderit veniam meatloaf mollit aliqua ad labore do ut dolor.', '$13'));
menuDiv.appendChild(menu('Shankle Chicken Frankfurter', 'Rump quis frankfurter labore pork pancetta do buffalo aute meatloaf landjaeger jerky spare ribs.', '$9'));
menuDiv.appendChild(menu('Kielbasa Jerky Laborum', ' Tenderloin sunt landjaeger doner labore laborum bacon.', '$3'));

contentDiv.appendChild(home);
contentDiv.appendChild(menuDiv);
contentDiv.appendChild(about);

export default contentDiv;