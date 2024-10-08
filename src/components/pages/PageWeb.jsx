import React from 'react';
import './page-web.css';
import Nav from '../nav/Nav';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import FotoProyecto from '../resources/FOTO PROYECTO.png';
import { useLocation } from 'react-router-dom';

const PageWeb = () => {

  const location = useLocation();
  const { id } = location.id || {};

  return (
    <>
      <Nav />
      <div className='container-web'>
        <h2 className='titleweb-plantilla'>Titulo del Proyecto</h2>
        <div className='container-OneColumn-web'>
          <h4>Descripcion</h4>
          <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.</p>
        </div>
        <div className="container-TwoColumn-web">
          <div>
            <h4>Caracteristicas</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
          <div>
            <h4>Objetivos</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
        <div className='container-OneColumn-web'>
          <h4>Desafios y Soluciones</h4>
          <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.</p>
        </div>
        <div className="container-TwoColumn-web">
          <div>
            <h4>Codigo Fuente</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
          <div>
            <h4>Tecnologias Usadas</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
        <div className="container-TwoColumnImage-web">
          <div className=''>
            <img src={FotoProyecto} className='' />
          </div>
          <div className=''>
            <h4 className='margin-bottom'>Contribuciones Personales</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
            <h4 className='margin-top'>Contribuciones Personales</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
        <div className='container-OneColumn-web'>
          <h4>Lecciones Aprendidas</h4>
          <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>

  )
};

export default PageWeb;