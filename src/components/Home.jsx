import React, { useState, useEffect } from 'react';
import Search from './Search';
import { getPokemons, getPokemonData } from '../../api';
import Pokedex from './Pokedex';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      // console.log("data.results", data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div key={pokemons.name}>
      <h1>Pokemones</h1>
      {/* <Search /> */}
      <Pokedex pokemons={pokemons} />
    </div>
  );
};

export default Home;
