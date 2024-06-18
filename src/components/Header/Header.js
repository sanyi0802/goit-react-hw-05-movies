import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Puedes agregar estilos para el header aquí

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
