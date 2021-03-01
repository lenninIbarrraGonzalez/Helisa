// eslint-disable-next-line import/prefer-default-export
export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemons = async (limit = 15, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemonEncounters = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemonsType = async () => {
  try {
    const url = 'https://pokeapi.co/api/v2/type/';
    const response = await fetch(url);
    const data = await response.json();
    console.log('data getPokeminsType', data);
    return data;
  } catch (error) {}
};

export const getPokemonCountType = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
