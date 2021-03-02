import React, { useState, useEffect } from 'react';
import Search from './Search';
import { getPokemons, getPokemonData, searchPokemon } from '../../api';
import Pokedex from './Pokedex';
import '../styles/home.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(300);
      // console.log("data.results", data.results);
      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setPokemons([result]);

    setLoading(false);
  };

  if (notFound) {
    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <h1>Pokemon</h1>
          <Search onSearch={onSearch} />
          <Typography>No se encontro el pokemon que buscabas</Typography>
        </Container>
      </>
    );
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>Pokemon</h1>
        <Search onSearch={onSearch} />

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
