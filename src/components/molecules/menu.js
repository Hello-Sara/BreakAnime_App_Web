import React from 'react';
import Logo from './Logo';

const Menu = () => {
  return (
    <div className="menu">
      <Logo />
      <div className="menu-item">Anime</div>
      <div className="menu-item">Films</div>
      <div className="menu-item">Genre</div>
    </div>
  );
};

export default Menu;