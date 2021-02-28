import React from 'react';
import Pokemon from './Pokemon';
import '../styles/pokedex.css';

const Pokedex = (props) => {
  console.log('props', props);
  const { pokemons } = props;
  return (
    <div className="pokedex__grid">
      {pokemons.map((pokemon, idx) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default Pokedex;
