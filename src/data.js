export function filterData(pokemonList, value){
  let filterPokemonList = [];
  if(value !== ""){
    for(let pokemon of pokemonList){
      if(pokemon.name.includes(value) || pokemon.type.toString().includes(value) ){
        filterPokemonList.push(pokemon) //push joga o valor dentro do array
      }else if(filterPokemonList.includes(pokemon)){
        let pokemonIndex = filterPokemonList.findIndex((currentPokemon) =>{
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