import"./style.c0ed6924.js";const i=document.querySelector("#get-contacts-button"),p=document.querySelector("#contact-list"),l=["name","email","tel","icon"],d={multiple:!0},m=async()=>{try{if(!("contacts"in navigator&&"ContactsManager"in window))throw"not-supported";(await navigator.contacts.select(l,d)).forEach(({name:s,email:a,tel:c,icon:o})=>{const e=document.createElement("li");if(e.innerText=`${s}: ${c!=null?c:a}`,p.appendChild(e),o.length>0){const r=URL.createObjectURL(o[0]),n=document.createElement("img");n.src=r,n.className="icon",e.appendChild(n)}})}catch(t){t==="not-supported"?alert("Conctacts API nos supported"):console.error(t)}};i.addEventListener("click",m);
