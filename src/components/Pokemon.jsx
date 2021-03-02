import React, { useEffect, useRef, useState } from 'react';
import '../styles/pokemon.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import { getPokemonEncounters } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // background: 'bisque',
    borderRadius: 20,
    justifyContent: 'space-between',
    minHeight: 200,
  },
  card: {
    borderRadius: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60 %',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  typeNames: {
    borderRadius: 7,
    borderBlockStyle: 'outset',
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
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: 120,
  },
  abilities: {
    paddingLeft: 3,
  },
  tab: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  stadic: {
    width: '100 %',
  },
  barras: {
    display: 'flex',
    alignItems: 'center',
  },
  titlePw: {
    marginRight: theme.spacing(1),
    textTransform: 'capitalize',
  },
}));

const Pokemon = (props) => {
  const { pokemon } = props;
  const classes = useStyles();
  const element = useRef(null);
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  let colore = '';
  const colore2 = '';
  const nomColor1 = pokemon.types[0].type.name;

  if (nomColor1 === 'normal') {
    colore = 'rgba(112, 82, 92, 0.2)';
  }
  if (nomColor1 === 'fighting') {
    colore = 'rgba(145, 73, 51, 0.2)';
  }
  if (nomColor1 === 'flying') {
    colore = 'rgba(73, 101, 123, 0.2)';
  }
  if (nomColor1 === 'poison') {
    colore = 'rgba(158, 106, 212, 0.2)';
  }
  if (nomColor1 === 'ground') {
    colore = 'rgba(109, 72, 30, 0.2)';
  }
  if (nomColor1 === 'rock') {
    colore = 'rgba(73, 23, 9, 0.2)';
  }
  if (nomColor1 === 'bug') {
    colore = 'rgba(61, 153, 80, 0.2)';
  }
  if (nomColor1 === 'ghost') {
    colore = 'rgba(49, 52, 104, 0.2)';
  }
  if (nomColor1 === 'steel') {
    colore = 'rgba(92, 117, 109, 0.2)';
  }
  if (nomColor1 === 'fire') {
    colore = 'rgba(170, 31, 33, 0.2)';
  }
  if (nomColor1 === 'water') {
    colore = 'rgba(21, 78, 227, 0.2)';
  }
  if (nomColor1 === 'grass') {
    colore = 'rgba(12, 126, 56, 0.2)';
  }
  if (nomColor1 === 'electric') {
    colore = 'rgba(199, 207, 81, 0.2)';
  }
  if (nomColor1 === 'psychic') {
    colore = 'rgba(158, 43, 107,0.2)';
  }
  if (nomColor1 === 'ice') {
    colore = 'rgba(133, 208, 241, 0.2)';
  }
  if (nomColor1 === 'dragon') {
    colore = 'rgba(68, 138, 147, 0.2)';
  }
  if (nomColor1 === 'dark') {
    colore = 'rgba(90, 90, 124, 0.2)';
  }
  if (nomColor1 === 'fairy') {
    colore = 'rgba(177, 26, 38, 0.2)';
  }
  if (nomColor1 === 'unknown') {
    colore = 'rgba(6, 7, 11, 0.2)';
  }
  if (nomColor1 === 'shadow') {
    colore = 'rgba(218, 81, 254,0.2)';
  }

  const handleClickOpen = () => {
    setOpen(true);
    fetchAreas();
  };

  const fetchAreas = async () => {
    const { id } = pokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`;
    try {
      const data = await getPokemonEncounters(url);

      setCategories(data);
      setLoading(false);
    } catch (error) {}
  };

  const handleClose = () => {
    setOpen(false);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    }, [element]);
  });

  return (
    <Card ref={element} className={classes.card} style={{ background: colore }}>
      <CardActionArea onClick={handleClickOpen} className={classes.root}>
        {show && (
          <>
            <div className={classes.details}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  {pokemon.name}{' '}
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
      </CardActionArea>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className={classes.tab}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className={classes.imagen}
            />
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="BaseStats" {...a11yProps(1)} />
                <Tab label="Encounters" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <DialogTitle id="alert-dialog-title">
                  {' '}
                  {pokemon.name}
                </DialogTitle>
                <DialogContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    Heigth: {pokemon.height}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Weight: {pokemon.weight}
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    Abilities:
                    {pokemon.abilities.map((item) => (
                      <span
                        className={classes.abilities}
                        key={item.ability.name}
                      >
                        {item.ability.name}
                      </span>
                    ))}
                  </Typography>
                </DialogContent>
              </TabPanel>

              <TabPanel value={value} index={1} dir={theme.direction}>
                <Box className={classes.stadic}>
                  {pokemon.stats.map((item) => (
                    <div className={classes.barras}>
                      <div className={classes.titlePw}>{item.stat.name}</div>
                      <Box
                        width={`${item.base_stat}%`}
                        bgcolor="#dc004e"
                        p={0.3}
                        my={0.3}
                      >
                        {item.base_stat}
                      </Box>
                    </div>
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                {categories.map((item) => (
                  <Typography>{item.location_area.name}</Typography>
                ))}
              </TabPanel>
            </SwipeableViews>
          </div>
        </Dialog>
      </div>
    </Card>
  );
};

export default Pokemon;
