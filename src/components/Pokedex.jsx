import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
  // console.log("props", props);
  const { pokemons } = props;
  return (
    <div>
      {pokemons.map((pokemon, idx) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default Pokedex;
