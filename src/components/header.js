import React from 'react';

function Header() {
  return (
    <header>
      <h1>POKEMON</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/iniciar-sesion">POKEDEX</a></li>
          <li><a href="/crear-cuenta">Crear Cuenta</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
