import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume">
        <div className="r-left">
          <div className="r-question">
            <h2>Que hago?</h2>
          </div>
          <div className="r-resumen">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. 
          Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </div>
          <button className="r-btn-contact">
              Contacto
          </button>
        </div>
        <div className="r-right">
          <div className="skill-1">
            <h4>Front Developer</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet 
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
          <div className="skill-2">
            <h4>Experiencia de Usuario(UX)</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet 
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
          <div className="skill-3">
            <h4>Web Developent</h4>
            <p className='p-resume'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet 
              orci. Mauris ultrices eget lorem ac vestibulum.</p>
          </div>
        </div>
    </div>
  )
};

export default Resume;