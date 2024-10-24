import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './page-ux.css';
import Nav from '../nav/Nav';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import FotoProyecto from '../resources/FOTO PROYECTO.png';
import { useParams } from 'react-router-dom';

const PageUx = () => {
  const { id } = useParams();
  const [detalleUx, setDetalleUx] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        console.log("ID del proyecto:", id); // Agrega esta línea
        const response = await axios.get(`http://localhost:1337/api/proyectos/${id}?populate=detalle_ux`);
        console.log('Respuesta completa de la API:', response.data); // Verificar la estructura de la respuesta
        setDetalleUx(response.data.data.attributes.detalle_ux);

      } catch (err) {
        console.error(err); // Logea el error completo para más detalles
        if (err.response) {
          if (err.response.status === 404) {
            setError(new Error('El proyecto no fue encontrado.'));
          } else {
            setError(err);
          }
        } else {
          setError(new Error('Error al conectar con el servidor.'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProyecto();

  }, [id]);

  if (loading) {
    return <p>Cargando...</p>; // Mensaje mientras se cargan los datos
  }

  if (error) {
    return <p>Error al cargar proyectos: {error.message}</p>; // Mensaje de error
  }

  if (!detalleUx) {
    return <p>No hay detalles disponibles para este proyecto.</p>;
  }

  const { title, description, challenge, solution, personalcontributions, methodologiesandtechnologies, summary, finalresults } = detalleUx;

  return (
    <>
      <Nav />
      <div className='container-ux'>
        <h2 className='titleux-plantilla'>{title}</h2>
        <div className='container-OneColumn-ux'>
          <h4>Descripción</h4>
          <p className='p-resume'>{description}</p>
        </div>
        <div className="container-TwoColumn-ux">
          <div>
            <h4>Desafío</h4>
            <p className='p-resume'>{challenge}</p>
          </div>
          <div>
            <h4>Solución</h4>
            <p className='p-resume'>{solution}</p>
          </div>
        </div>
        <div className="container-TwoColumnImage-ux">
          <div>
            <img src={FotoProyecto} alt="Foto Proyecto" />
          </div>
          <div>
            <h4>Contribuciones Personales</h4>
            <p className='p-resume'>{personalcontributions}</p>
          </div>
        </div>
        <div className='container-OneColumn-ux'>
          <h4>Metodologías y Tecnologías</h4>
          <p className='p-resume'>{methodologiesandtechnologies}</p>
        </div>
        <div className="container-TwoColumnImage-ux">
          <div>
            <img src={FotoProyecto} alt="Foto Proyecto" />
          </div>
          <div>
            <h4>Resumen</h4>
            <p className='p-resume'>{summary}</p>
          </div>
        </div>
        <div className='container-OneColumn-ux'>
          <h4>Resultados Finales</h4>
          <p className='p-resume'>{finalresults}</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default PageUx;