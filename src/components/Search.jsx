import React, { useState } from 'react';
import { searchPokemon } from '../../api';

const Search = () => {
  // const { onSearch } = props;

  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onClick = async (e) => {
    console.log('search', search);
    const data = await searchPokemon(search);
    console.log(data);
    setPokemon(data);
  };

  return (
    <div>
      <div>
        <input placeholder="Buscar" onChange={onChange} />
      </div>
      <div>
        <button type="button" onClick={onClick}>
          Buscar
        </button>
      </div>
      <div>Nombre: {pokemon?.name}</div>
      <div>peso: {pokemon?.weight}</div>
      <div>
        <img src={pokemon?.sprites.back_default} alt="imagen-pokemon" />
      </div>
    </div>
  );
};

export default Search;
