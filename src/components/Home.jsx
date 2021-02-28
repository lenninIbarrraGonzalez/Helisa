import React, { useState, useEffect } from 'react';
import Search from './Search';
import { getPokemons, getPokemonData } from '../../api';
import Pokedex from './Pokedex';
import '../styles/home.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      // console.log("data.results", data.results);
      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>Pokemones</h1>
        {/* <Search /> */}
        <Pokedex pokemons={pokemons} />
      </Container>
    </>
  );
};

export default Home;
