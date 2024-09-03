import React from 'react';
import './projects.css';
import Card from './card/Card.jsx';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container-up">
        <h2 className='title-project'>Proyectos</h2>
        <p className='p-project'>Aqui encontraras proyectos realizados tanto en solitario como en equipo.</p>
      </div>
      <div className="project-container-down">
        <Card
        image='https://hireline.io/blog/wp-content/uploads/2022/07/habilidades-de-un-programador-1200x900.jpg'
        workstation='Frontend Desing'
        title='C&B Trading'
        description='Se rediseño toda la pagina web a pedido del cliente
        asi mismo que se le dio el mantenimiento necesario 
        para estar actualizada con respecto al avance de la 
        empresa. Fue un trabajo en completamente en
        solitario.'
        button='Mas informacion'
        />
        <Card
        image='https://hireline.io/blog/wp-content/uploads/2022/07/habilidades-de-un-programador-1200x900.jpg'
        workstation='Frontend Desing'
        title='C&B Trading'
        description='Se rediseño toda la pagina web a pedido del cliente
        asi mismo que se le dio el mantenimiento necesario 
        para estar actualizada con respecto al avance de la 
        empresa. Fue un trabajo en completamente en
        solitario.'
        button='Mas informacion'
        />
        <Card
        image='https://hireline.io/blog/wp-content/uploads/2022/07/habilidades-de-un-programador-1200x900.jpg'
        workstation='Frontend Desing'
        title='C&B Trading'
        description='Se rediseño toda la pagina web a pedido del cliente
        asi mismo que se le dio el mantenimiento necesario 
        para estar actualizada con respecto al avance de la 
        empresa. Fue un trabajo en completamente en
        solitario.'
        button='Mas informacion'
        />
        
      </div>
    </div>
  )
};

export default Projects;