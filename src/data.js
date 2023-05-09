export function filterData(pokemonList, value){
  const filterPokemonList = [];
  if(value !== ""){
    for(const pokemon of pokemonList){
      if(pokemon.name.toLowerCase().includes(value.toLowerCase()) || pokemon.type.toString().toLowerCase().includes(value.toLowerCase()) ){
        filterPokemonList.push(pokemon) //push joga o valor dentro do array
      }else if(filterPokemonList.includes(pokemon)){
        const pokemonIndex = filterPokemonList.findIndex((currentPokemon) =>{
          return pokemon.name === currentPokemon.name
        } ) //findIndex retorna o index do elemento dentro do array entre ()
        filterPokemonList.splice(pokemonIndex, 1)
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
      }else{
        return true;
      }
    })
  }else if(value === 'z-a'){
    sortPokemonAZ.sort(function (a, b){
      if(a.name < b.name){
        return true;
      }else{
        return -1;
      }
    })
  }
  return sortPokemonAZ
}
