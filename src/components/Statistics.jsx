import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Pie, defaults } from 'react-chartjs-2';
import { getPokemonsType, getPokemonCountType } from '../../api';

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom';

const Statistics = () => {
  const [pokemonsTypes, setPokemonsTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemonsTypes = async () => {
    try {
      const data = await getPokemonsType();

      const promises = data.results.map(
        async (pokemon) => await getPokemonCountType(pokemon.url)
      );
      const results = await Promise.all(promises);
      // console.log('FINAL', results);
      setPokemonsTypes(results);

      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemonsTypes();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  const typos = [];
  const countTypos = [];
  return (
    <div>
      {pokemonsTypes.map((item) => typos.push(item.name))}
      {pokemonsTypes.map((item) => countTypos.push(item.pokemon.length))}
      <Pie
        data={{
          labels: typos,
          datasets: [
            {
              label: '# of votes',
              data: countTypos,
              backgroundColor: [
                'rgba(112, 82, 92, 0.2)',
                'rgba(145, 73, 51, 0.2)',
                'rgba(73, 101, 123, 0.2)',
                'rgba(158, 106, 212, 0.2)',
                'rgba(109, 72, 30, 0.2)',
                'rgba(73, 23, 9, 0.2)',
                'rgba(61, 153, 80, 0.2)',
                'rgba(49, 52, 104, 0.2)',
                'rgba(92, 117, 109, 0.2)',
                'rgba(170, 31, 33, 0.2)',
                'rgba(21, 78, 227, 0.2)',
                'rgba(12, 126, 56, 0.2)',
                'rgba(199, 207, 81, 0.2)',
                'rgba(158, 43, 107,0.2)',
                'rgba(133, 208, 241, 0.2)',
                'rgba(68, 138, 147, 0.2)',
                'rgba(90, 90, 124, 0.2)',
                'rgba(177, 26, 38, 0.2)',
                'rgba(6, 7, 11, 0.2)',
                'rgba(218, 81, 254,0.2)',
              ],
              borderColor: [
                'rgba(112, 82, 92, 1)',
                'rgba(145, 73, 51, 1)',
                'rgba(73, 101, 123, 1)',
                'rgba(158, 106, 212, 1)',
                'rgba(109, 72, 30, 1)',
                'rgba(73, 23, 9, 1)',
                'rgba(61, 153, 80, 1)',
                'rgba(49, 52, 104, 1)',
                'rgba(92, 117, 109, 1)',
                'rgba(170, 31, 33, 1)',
                'rgba(21, 78, 227, 1)',
                'rgba(12, 126, 56, 1)',
                'rgba(199, 207, 81, 1)',
                'rgba(158, 43, 107,1)',
                'rgba(133, 208, 241, 1)',
                'rgba(68, 138, 147, 1)',
                'rgba(90, 90, 124, 1)',
                'rgba(177, 26, 38, 1)',
                'rgba(6, 7, 11, 1)',
                'rgba(218, 81, 254,1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default Statistics;
