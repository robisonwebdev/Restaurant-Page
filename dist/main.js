(()=>{"use strict";const e=function(){const e=document.createElement("img");return e.setAttribute("class","redBresaola"),e.setAttribute("src","./images/redBresaola1.png"),e.setAttribute("alt","Red Bresaola Title with red cow head below"),e},t=function(e,t,n){const i=document.createElement("div"),a=document.createElement("h2"),r=document.createElement("p"),l=document.createElement("h3"),u=document.createElement("div");return i.setAttribute("class","menuItem"),a.setAttribute("class","menuTitle"),r.setAttribute("class","menuDescription"),l.setAttribute("class","menuPrice"),u.setAttribute("class","borderBottom"),a.innerText=e,r.innerText=t,l.innerText=n,i.appendChild(a),i.appendChild(r),i.appendChild(l),i.appendChild(u),i},n=function(){const n=document.createElement("div"),i=document.createElement("div");return n.setAttribute("id","content"),i.setAttribute("id","menu"),i.setAttribute("class","containerSections"),i.appendChild(e()),i.appendChild(t("Picanha Porchetta Pork","Esse laborum id, non venison fugiat nisi cupidatat excepteur quis chislic boudin enim. Laborum qui nisi beef aliqua alcatra.","$12")),i.appendChild(t("Sirloin Magna"," Non tenderloin ex, capicola turducken id fatback labore drumstick adipisicing short loin.","$22")),i.appendChild(t("Turducken Aliquip"," In short loin burgdoggen swine pancetta ham turkey minim culpa consectetur tenderloin flank. Tempor magna ut nisi burgdoggen kevin eu aliquip kielbasa leberkas pork.","$8")),i.appendChild(t("Tri-tip Aliqua Salami Spareribs","Voluptate filet mignon kevin reprehenderit veniam meatloaf mollit aliqua ad labore do ut dolor.","$13")),i.appendChild(t("Shankle Chicken Frankfurter","Rump quis frankfurter labore pork pancetta do buffalo aute meatloaf landjaeger jerky spare ribs.","$9")),i.appendChild(t("Kielbasa Jerky Laborum"," Tenderloin sunt landjaeger doner labore laborum bacon.","$3")),n.appendChild(function(){const t=document.createElement("div"),n=document.createElement("p"),i=document.createElement("button");return t.setAttribute("id","home"),t.setAttribute("class","containerSections"),i.setAttribute("id","menuBtn"),i.setAttribute("type","button"),n.innerText="Scelerisque varius morbi enim nunc faucibus a pellentesque sit.",i.innerText="Menu",t.appendChild(e()),t.appendChild(n),t.appendChild(i),t}()),n.appendChild(i),n.appendChild(function(){const t=document.createElement("div"),n=document.createElement("h2"),i=document.createElement("p");return t.setAttribute("id","about"),t.setAttribute("class","containerSections"),n.innerText="ABOUT",i.innerText="Nullam condimentum nunc sed enim efficitur feugiat eu vel lacus. Fusce ut lobortis ante. Quisque ac posuere nibh. Nam tempus orci eget ante venenatis, in tincidunt felis laoreet. Cras mollis massa ante, a vehicula enim iaculis ac. Ut sed imperdiet enim. Nam ut iaculis metus. Nulla sapien lacus, facilisis vitae blandit sit amet, ultrices in libero. Integer mollis tellus urna, a euismod lorem bibendum fringilla. Vivamus sed felis ut tortor lacinia ornare. Integer sed vehicula ante. Vestibulum sodales tincidunt nisi, quis pulvinar elit pulvinar at.",t.appendChild(e()),t.appendChild(n),t.appendChild(i),t}()),n};!function(){const e=document.querySelector("#container");e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("ul"),n=document.createElement("li"),i=document.createElement("li"),a=document.createElement("li");return e.setAttribute("id","navbar"),t.setAttribute("id","linkContainer"),n.setAttribute("id","homeLink"),i.setAttribute("id","menuLink"),a.setAttribute("id","aboutLink"),n.innerText="HOME",i.innerText="MENU",a.innerText="ABOUT",t.appendChild(n),t.appendChild(i),t.appendChild(a),e.appendChild(t),e}()),e.appendChild(n()),e.appendChild(function(e,t){const n=document.createElement("div"),i=document.createElement("small"),a=document.createElement("a");return n.setAttribute("id","footer"),a.setAttribute("href",`${t}`),a.setAttribute("target","_blank"),i.innerText="Developed by ",a.innerText=e,i.appendChild(a),n.appendChild(i),n}("David Robison","https://github.com/robisonwebdev"));const t=document.querySelector("#homeLink"),i=document.querySelector("#menuLink"),a=document.querySelector("#aboutLink"),r=document.querySelector("#menuBtn"),l=document.querySelector("#home"),u=document.querySelector("#menu"),d=document.querySelector("#about");function o(){l.style.display="flex",u.style.display="none",d.style.display="none"}function c(){l.style.display="none",u.style.display="flex",d.style.display="none"}o(),t.addEventListener("click",(()=>{o()})),i.addEventListener("click",(()=>{c()})),a.addEventListener("click",(()=>{l.style.display="none",u.style.display="none",d.style.display="flex"})),r.addEventListener("click",(()=>{c()}))}()})();