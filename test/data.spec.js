import { filterData, sortByAZ } from '../src/data.js';

const bulbasaur = {
  name: "bulbasaur",
  type: [
    "grass",
    "poison"
  ]
}

const charmander = {
  name: "charmander",
  type: [
    "fire"
  ]
}

const squirtle = {
  name: "squirtle",
  type: [
    "water"
  ]
}

const testPokemons = [bulbasaur, charmander, squirtle]
const testPokemons2 = [charmander, squirtle, bulbasaur]

describe('Buscar pokemons por nome', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('retorna os pokemons cujo nome tem uma das letras digitadas', () => {
    const inputValueTest1 = "bul"
    const inputValueTest2 = "squi"
    const inputValueTest3 = ""

    expect(filterData(testPokemons, inputValueTest1)).toEqual([bulbasaur]);
    expect(filterData(testPokemons, inputValueTest2)).toEqual([squirtle]);
    expect(filterData(testPokemons, inputValueTest3)).toEqual(testPokemons);
  }); 

  it('retorna os tipos dos pokemons digitados', () => {
    const inputTypeTest1 = "grass"
    const inputTypeTest2 = "water"
    const inputTypeTest3 = "fire"
    expect(filterData(testPokemons, inputTypeTest1)).toEqual([bulbasaur]);
    expect(filterData(testPokemons, inputTypeTest2)).toEqual([squirtle]);
    expect(filterData(testPokemons, inputTypeTest3)).toEqual([charmander]);
  });

});

describe('Ordernar pokemons em ordem alfabetica', () => {
  it('is a function', () => {
    expect(typeof sortByAZ).toBe('function');
  });

  it('Ordenar de a-z e z-a', () => {
    const orderAZ = "a-z"
    const orderZA = "z-a"

    expect(sortByAZ(orderAZ, testPokemons)).toEqual([bulbasaur, charmander, squirtle]);
    expect(sortByAZ(orderZA, testPokemons)).toEqual([squirtle, charmander, bulbasaur]);
    
    expect(sortByAZ(orderAZ, testPokemons2)).toEqual([bulbasaur, charmander, squirtle]);
    expect(sortByAZ(orderZA, testPokemons2)).toEqual([squirtle, charmander, bulbasaur]);
    
  });
});
