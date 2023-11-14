import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Enlace al inicio */}
        <Link className="navbar-brand" to="/">Cat-store</Link>

        {/* Botón de navegación para dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Enlace a la página principal */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Arena</Link>
            </li>
            {/* Enlace a la categoría utilizando el enlace dinámico */}
            <li className="nav-item">
              <Link className="nav-link" to="/category/transportadoras">Transportadoras</Link>
            </li>
            {/* Enlace a la página de carrito */}
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">Accesorios</Link>
            </li>
          </ul>
          {/* Componente de widget del carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
