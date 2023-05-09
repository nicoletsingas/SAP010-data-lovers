import { filterData, sortByAZ } from '../src/data.js';


describe('Buscar pokemons por nome', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  /* it('returns `filterPokemonList`', () => {
    expect(filterPokemonList()).toBe('variavel');
  }); */
});


describe('Ordernar a-z, z-a', () => {
  it('is a function', () => {
    expect(typeof sortByAZ).toBe('function');
  });

  /* it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
});
