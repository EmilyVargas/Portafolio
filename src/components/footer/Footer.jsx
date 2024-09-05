import React from 'react';
import "./footer.css";
import LogoEmily from "../resources/LogoEmily.svg";

const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='f-left'>
            <a href='#home' className='footer-logo'>
                <img src={LogoEmily} alt=''/>
            </a>
            <div className='f-name'>Emily</div>
      </div>
      <div className='f-right'>
            <div className='f-list'>
            <ul>
                <li>Inicio</li>
                <li>Resumen</li>
                <li>Proyectos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;