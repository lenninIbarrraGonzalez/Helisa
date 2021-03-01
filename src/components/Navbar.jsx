import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  img: {
    width: 150,
  },
  statics: {
    display: 'flex',
  },
  dataStatics: {
    marginLeft: 20,
    display: 'flex',
    cursor: 'pointer',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav className={classes.root}>
      <section>
        <Link to="/">
          <img src={imgUrl} alt="logo-pokemon" className={classes.img} />
        </Link>
      </section>
      <section className={classes.statics}>
        <div>
          <Link to="/" className={classes.dataStatics}>
            <HomeIcon />
            <Typography>Pokemons</Typography>
          </Link>
        </div>
        <div>
          <Link to="/statistics" className={classes.dataStatics}>
            <EqualizerIcon />
            <Typography>Estadisticas</Typography>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
