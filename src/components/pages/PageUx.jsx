import React from 'react';
import './page-ux.css';
import Nav from '../nav/Nav';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import FotoProyecto from '../resources/FOTO PROYECTO.png'
import { useLocation } from 'react-router-dom';

const PageUx = () => {

  const location=useLocation();
  const {id}=location.id||{};

  return (
    <>
    <Nav />
    <div className='container-ux'>
        <h2 className='titleux-plantilla'>Titulo del Proyecto</h2>
        <div className='container-OneColumn-ux'>
          <h4>Descripcion</h4>
          <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.</p>
        </div>
        <div className="container-TwoColumn-ux">
          <div>
            <h4>Desafio</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
          <div>
            <h4>Solucion</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
        <div className="container-TwoColumnImage-ux">
          <div className=''>
            <img src={FotoProyecto} className='' />
          </div>
          <div className=''>
            <h4>Contribuciones Personales</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
        <div className='container-OneColumn-ux'>
          <h4>Metodologias y Tecnologias</h4>
          <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
            orci. Mauris ultrices eget lorem ac vestibulum.</p>
        </div>
        <div className="container-TwoColumnImage-ux">
          <div className=''>
            <img src={FotoProyecto} className='' />
          </div>
          <div className=''>
            <h4>Resumen</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
        <div className='container-OneColumn-ux'>
          <h4>Metodologias y Tecnologias</h4>
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
}

export default PageUx;