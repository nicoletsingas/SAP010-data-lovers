 import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);
console.log(data);

let currentUser;
let nameUser = document.querySelector("#name");

const homePage = document.querySelector('#home-nav');
const pokemonsPage = document.querySelector('#pokemons-nav');
const animePage = document.querySelector('#anime-nav');
const pokemonGoPage = document.querySelector('#pokemongo-nav');
const divHome = document.querySelector('.home');
const divPokemons = document.querySelector('.pokemons');
const divAnime = document.querySelector('.anime');
const divPokemonGo = document.querySelector('.pokemongo');

const pokemons = document.querySelector('.div-parent-pokemon');
const pokemonList = data.pokemon;

window.addEventListener("pageshow", function(){
    currentUser = localStorage.getItem("nomeUsuario");
    nameUser.innerText = currentUser;
});

homePage.addEventListener('click', function(){
    showHideDiv('.home')
}) ;

pokemonsPage.addEventListener('click', function(){
    showHideDiv('.pokemons')
});

animePage.addEventListener('click', function(){
    showHideDiv('.anime')
});

pokemonGoPage.addEventListener('click', function(){
    showHideDiv('.pokemongo')
});

function showHideDiv(pokemon){
    const content = document.querySelector(pokemon)
    divHome.classList.remove('visible')
    divPokemons.classList.remove('visible')
    divAnime.classList.remove('visible')
    divPokemonGo.classList.remove('visible')
    content.classList.add('visible')
};

 for (let i=0; i < pokemonList.length; i++){
    const card = document.createElement("div")
    card.classList.add("card-pokemon")
    card.innerHTML = `
        <img src="${pokemonList[i].img}" alt="imagem-pokemon">
        <p>Nome: ${pokemonList[i].name}</p>
        <p>Elemento: ${pokemonList[i].type}</p>
        `
    pokemons.appendChild(card) // colocar o card dentro da div (div-parent-pokemon)
}
