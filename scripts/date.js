const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}  | Alexia White | Utah, USA</span>  `;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;