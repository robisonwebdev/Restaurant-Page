(()=>{"use strict";const e=document.createElement("div"),t=document.createElement("ul"),n=document.createElement("li"),i=document.createElement("li"),d=document.createElement("li");e.setAttribute("id","navbar"),t.setAttribute("id","linkContainer"),n.setAttribute("id","homeLink"),i.setAttribute("id","menuLink"),d.setAttribute("id","aboutLink"),n.innerText="HOME",i.innerText="MENU",d.innerText="ABOUT",t.appendChild(n),t.appendChild(i),t.appendChild(d),e.appendChild(t);const r=e,l=document.createElement("div"),a=document.createElement("small"),o=document.createElement("a");l.setAttribute("id","footer"),o.setAttribute("href","https://github.com/robisonwebdev"),o.setAttribute("target","_blank"),a.innerText="Developed by ",o.innerText="David Robison",a.appendChild(o),l.appendChild(a);const c=l,u=document.querySelector("#content");u.appendChild(r),u.appendChild(c)})();