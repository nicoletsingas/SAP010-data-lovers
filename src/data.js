export function filterData(pokemonList, value){
  const filterPokemonList = [];
  if(value !== ""){
    for(const pokemon of pokemonList){
      if(pokemon.name.toLowerCase().includes(value.toLowerCase()) || pokemon.type.toString().toLowerCase().includes(value.toLowerCase()) ){
        filterPokemonList.push(pokemon) //push joga o valor dentro do array
      }
    }
    return filterPokemonList
  }else{
    return pokemonList
  } 
}

export function sortByAZ(value, pokemonList){
  const sortPokemonAZ = [...pokemonList]; //.. spread - espalhar a lista de pokemons
  if(value === 'a-z'){
    sortPokemonAZ.sort(function (a, b){
      if(a.name < b.name){
        return -1;
      }
    })
  }else{
    sortPokemonAZ.sort(function (a, b){
      if(a.name > b.name){
        return -1;
      }
    })
  }
  return sortPokemonAZ
}
