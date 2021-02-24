import React from 'react';

const Navbar = () => {
  const imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav>
      <div>
        <img src={imgUrl} alt="logo-pokemon" />
      </div>
    </nav>
  );
};

export default Navbar;
