import React from 'react';
import '../nav/nav.css';
import LogoEmily from "../resources/LogoEmily.svg";

const Nav = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <a href='#home' className='nav-logo'>
          <img src={LogoEmily} alt=''/>
        </a>
        <div className='n-name'>Emily</div>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul>
            <li>Inicio</li>
            <li>Resumen</li>
            <li>Proyectos</li>
          </ul>
        </div>
        <button className="btn-contact">
          Contacto
        </button>
      </div>
    </div>
  )
};

export default Nav;