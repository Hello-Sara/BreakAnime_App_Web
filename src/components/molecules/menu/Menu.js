import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../atoms/icons/logo/Logo';
import Bouton from '../../atoms/bouton/Bouton';
import Search from '../../forms/search/Search';

function Menu() {
    return (
        <nav className="menu">
            <Logo />
            <ul className="nav-links">
                <li><a href="/animes">Animes</a></li>
                <li><a href="/films">Films</a></li>
                <li><a href="/genre">Genre</a></li>
            </ul>
            <Search />
            <div className="buttons">
                <NavLink to="/login" className="connect-link">Se connecter</NavLink>
                <NavLink to="/register" className="inscrire-link">
                    <Bouton name="S'inscrire" onClick={() => console.log('Bouton cliqué')} />
                </NavLink>
            </div>
        </nav>
    );
}

export default Menu;