import React from 'react';
import '../home/home.css';
import Foto from "../resources/FOTO.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <h1>Hola, mi nombre es</h1>
          <h1>Emily</h1>
        </div>
        <div className="i-description">
          <p className='p-intro'>Estudiante de la Universidad de Costa Rica en desarrollo de habilidades en Desarrollo FrontEnd de paginas web y
            aplicaciones móviles en énfasis con la experiencia de usuario y diseño.</p>
        </div>
        <button className='btn-CV'><FontAwesomeIcon icon={faArrowDown}/> Descargar CV</button>
      </div>
      <div className="i-right">
         <div className="i-foto">
            <img src={Foto} alt="" className='foto'/>
         </div>
         <div className="i-redes">
         <button className='btn-facebook'><FontAwesomeIcon icon={faFacebookF}/></button>
         <button className='btn-github'><FontAwesomeIcon icon={faGithub}/></button>
         <button className='btn-linkedin'><FontAwesomeIcon icon={faLinkedinIn}/></button>
         </div>
      </div>
    </div>
  )
};

export default Home;