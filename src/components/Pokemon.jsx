import React, { useEffect, useRef, useState } from 'react';
import '../styles/pokemon.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'bisque',
    borderRadius: 20,
    justifyContent: 'space-between',
    minHeight: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60 %',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    background: 'violet',
  },
  typeNames: {
    borderRadius: 7,
    backgroundColor: 'aqua',
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textTransform: 'capitalize',
  },
  img: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '40%',
    // height: 150,
    background: 'red',
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: 120,
    background: 'yellow',
  },
  abilities: {
    paddingLeft: 3,
  },
}));

const Pokemon = (props) => {
  const { pokemon } = props;
  const classes = useStyles();
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        // console.log(isIntersecting);
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    }, [element]);
  });
  // console.log(element.current);
  return (
    <Card className={classes.root} ref={element}>
      {show && (
        <>
          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5">
                {pokemon.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Heigth: {pokemon.height}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Weight: {pokemon.weight}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                Abilities:
                {pokemon.abilities.map((item) => (
                  <span className={classes.abilities} key={item.ability.name}>
                    {item.ability.name}
                  </span>
                ))}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              {pokemon.types.map((item) => (
                <div className={classes.typeNames} key={item.type.name}>
                  {item.type.name}
                </div>
              ))}
            </div>
          </div>

          <div className={classes.img}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className={classes.imagen}
            />
          </div>
        </>
      )}
    </Card>
  );
};

export default Pokemon;
