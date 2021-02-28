import React, { useState, useEffect } from 'react';
import Search from './Search';
import { getPokemons, getPokemonData } from '../../api';
import Pokedex from './Pokedex';
import '../styles/home.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(15, 15 * page);
      // console.log("data.results", data.results);
      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>Pokemones</h1>
        {/* <Search /> */}
        {loading ? (
          <LinearProgress />
        ) : (
          <Pokedex pokemons={pokemons} page={page} setPage={setPage} />
        )}
      </Container>
    </>
  );
};

export default Home;
