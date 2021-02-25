import React, { useState, useEffect } from 'react';
import Search from './Search';
import { getPokemons } from '../../api';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemones</h1>
      <Search />
    </div>
  );
};

export default Pokedex;
