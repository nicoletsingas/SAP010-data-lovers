import {filterData, sortByAZ} from './data.js'; //importando função
import {bgColorPokemons} from './pokemon-type.js';
import data from './data/pokemon/pokemon.js';

let currentUser;
const nameUser = document.querySelector("#name");

const homePage = document.querySelector('#home-nav');
const pokemonsPage = document.querySelector('#pokemons-nav');
const animePage = document.querySelector('#anime-nav');
const pokemonGoPage = document.querySelector('#pokemongo-nav');
const divHome = document.querySelector('.home');
const divPokemons = document.querySelector('.pokemons');
const divAnime = document.querySelector('.anime');
const divPokemonGo = document.querySelector('.pokemongo');
const pokemons = document.querySelector('.div-parent-pokemon');
const pokemonList = JSON.parse(JSON.stringify(data.pokemon).replaceAll("-", "_"));
const inputSearch = document.querySelector("#search-input");
const statisticText = document.querySelector(".statistic-data");

const selectOrder = document.querySelector("#select-order-pokemon");

const clickMenu = document.querySelector(".burger-menu");
const itensMenu = document.querySelector(".menu");

//listeners

window.addEventListener("pageshow", function(){
  currentUser = localStorage.getItem("nomeUsuario");
  nameUser.innerText = currentUser;
});

homePage.addEventListener('click', function(){
  showHideDiv('.home')
}); 

pokemonsPage.addEventListener('click', function(){
  showHideDiv('.pokemons')
});

animePage.addEventListener('click', function(){
  showHideDiv('.anime')
});

pokemonGoPage.addEventListener('click', function(){
  showHideDiv('.pokemongo')
});

inputSearch.addEventListener("input", () => {
  const filteredPokemonList = filterData(pokemonList, inputSearch.value)
  renderPokemon(filteredPokemonList);
});

selectOrder.addEventListener("change", () => {
  const orderPokemon = sortByAZ(selectOrder.value, pokemonList);
  renderPokemon(orderPokemon);
})

clickMenu.addEventListener("click", function(){
  if(itensMenu.style.display === "block"){
    itensMenu.style.display = "none"
  }else{
    itensMenu.style.display = "block"
  }
})

//functions/for

function showHideDiv(pokemon){
  const content = document.querySelector(pokemon)
  divHome.classList.remove('visible')
  divPokemons.classList.remove('visible')
  divAnime.classList.remove('visible')
  divPokemonGo.classList.remove('visible')
  content.classList.add('visible')
}

function renderPokemon(pokemonList){
  pokemons.innerHTML = "";
  for (let i=0; i < pokemonList.length; i++){
    const changeBackground = bgColorPokemons.find((typeOfPokemons) => {
      return typeOfPokemons.type === pokemonList[i].type[0]
    }) 
    const card = document.createElement("div")
    card.classList.add("card-pokemon")
    card.innerHTML = `
    <p class="pokemon-name"><strong>${pokemonList[i].name.charAt(0).toUpperCase() + pokemonList[i].name.slice(1)}</strong></p>
    <img src="${pokemonList[i].img}" alt="imagem-pokemon">
    <p><span class="pokemon-atk">Atk:</span> ${pokemonList[i].stats.base_attack} | <span class="pokemon-def">Def:</span> ${pokemonList[i].stats.base_defense}</p>
    <p>${pokemonList[i].pokemon_rarity}</p>
    <p class="pokemon-type"> ${pokemonList[i].type}</p>
    `
    card.style.backgroundColor = changeBackground.color
    pokemons.appendChild(card) // colocar o card dentro da div (div-parent-pokemon)
  }
  const amountPokemon = pokemons.querySelectorAll(".card-pokemon").length
  const percentPokemons = amountPokemon / data.pokemon.length * 100
  const totalPercent = percentPokemons.toFixed(1)
  
  statisticText.innerText = `Foram encontrados ${amountPokemon} tipos de pokemons, equivale a ${totalPercent}%`
}
renderPokemon(pokemonList);

