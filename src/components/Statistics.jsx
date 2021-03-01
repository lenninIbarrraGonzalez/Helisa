import React, { useState, useEffect } from 'react';
import { getPokemonsType, getPokemonCountType } from '../../api';

const Statistics = () => {
  const fetchPokemonsTypes = async () => {
    try {
      console.log('entro');
      const data = await getPokemonsType();
      console.log(' recibo data getPokeminsType', data);
      const promises = data.results.map(
        async (pokemon) => await getPokemonCountType(pokemon.url)
      );
      const results = await Promise.all(promises);
      console.log('FINAL', results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemonsTypes();
  }, []);

  return (
    <div>
      <h1>Typos de pokemones</h1>
    </div>
  );
};

export default Statistics;
