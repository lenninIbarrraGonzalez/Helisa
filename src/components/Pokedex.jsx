import React from 'react';
import Pokemon from './Pokemon';
import '../styles/pokedex.css';
import Pagination from './Pagination';

const Pokedex = (props) => {
  console.log('props', props);
  const { pokemons, page, setPage } = props;
  return (
    <>
      <Pagination
        page={page + 1}
        totalPage={30}
        onLeftClick={console.log}
        onRightClick={console.log}
      />
      <div className="pokedex__grid">
        {pokemons.map((pokemon, idx) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
