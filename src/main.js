 import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

let currentUser;
let nameUser = document.querySelector("#name");

window.addEventListener("pageshow", function(){
    currentUser = localStorage.getItem("nomeUsuario");
    nameUser.innerText = currentUser;
})



