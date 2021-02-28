import React from 'react';
import '../styles/pokemon.css';

const Pokemon = (props) => {
  const { pokemon } = props;
  // console.log('iamgenes', pokemon);
  return (
    <div className="pokemon__card">
      <h3 className="pokemon__card--title">{pokemon.name}</h3>

      <div className="pokemon__body">
        <div className="pokemon__info">
          <p>Heigth: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>

          <div className="pokemon__abilities">
            Abilities:
            {pokemon.abilities.map((item) => (
              <div className="pokemon__abilities--name" key={item.ability.name}>
                {item.ability.name}
              </div>
            ))}
          </div>

          <div className="pokemon__types">
            {pokemon.types.map((item) => (
              <div className="pokemon__types--name" key={item.type.name}>
                {item.type.name}
              </div>
            ))}
          </div>
        </div>

        <div className="pokemon-img-container">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="pokemon-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
