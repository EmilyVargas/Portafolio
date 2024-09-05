import React from 'react';
import './contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,faEnvelope,faPhoneAlt,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="card-contact">
        <div className="c-left">
          <h3 className='title-1'>Desea contactar conmigo?</h3>
          <span className='title-2'>Por favor rellena el formulario o contacte directamente conmigo.</span>
          <div className="direccion">
            <div className="icon-location"><FontAwesomeIcon icon={faMapMarkerAlt}/></div>
              <div className="text-info">
                <p className='title-3'>Lugar de Residencia</p>
                <span className='info-contact'>Heredia, Merdeces Norte</span>
            </div>
          </div>
          <div className="correo-electronico">
          <div className="icon-adress"><FontAwesomeIcon icon={faEnvelope}/></div>
            <div className="text-info">
              <p className='title-3'>Correo Electronico</p>
              <span className='info-contact'>Emily.Vargas@live.com</span>
            </div>
          </div>
          <div className="numero-telefono">
          <div className="icon-number"><FontAwesomeIcon icon={faPhoneAlt}/></div>
            <div className="text-info">
              <p className='title-3'>Numero de Telefono</p>
              <span className='info-contact'>+506 8431-5723</span>
            </div>
          </div>
          <div className="c-redes">
         <button className='btn-facebook'><FontAwesomeIcon icon={faFacebookF}/></button>
         <button className='btn-github'><FontAwesomeIcon icon={faGithub}/></button>
         <button className='btn-linkedin'><FontAwesomeIcon icon={faLinkedinIn}/></button>
         </div>
        </div>
        <div className="c-right">
            <form action="" className='contact-form'>
              <input type="text" className='contact-form-input contact-form-input-name' placeholder='Nombre*' />
              <input type="email" className='contact-form-input' placeholder='Correo*' />
              <input type="text" className='contact-form-input' placeholder='Asunto*' />
              <input type="message" className='contact-form-input' placeholder='Mensaje*' />
              <button className='btn-contacto'>Enviar  <FontAwesomeIcon icon={faPaperPlane}/></button>
            </form>
        </div>
      
      </div>
    </div>
  )
};

export default Contact;