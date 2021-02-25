import React from 'react';

const Pokemon = (props) => {
  const { pokemon } = props;
  console.log('iamgenes', pokemon);
  return (
    <>
      <div>{pokemon.name}</div>
      <div>{pokemon.id}</div>
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      {pokemon.types.map((type, idx) => (
        <div>{type.type.name}</div>
      ))}
    </>
  );
};

export default Pokemon;
