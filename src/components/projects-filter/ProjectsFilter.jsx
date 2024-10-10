import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectsFilter.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigate } from 'react-router-dom';

const ProjectsFilter = () => {

    const [proyectos, setProyectos] = useState([]);
    const [originalProyectos, setOriginalProyectos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const navigate=useNavigate();

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/proyectos?populate=*');
                setProyectos(response.data.data);
                setOriginalProyectos(response.data.data);
            }catch(error){
                console.error('Error fetching projects', error);
            }
        };
        fetchProyectos();
    }, []);

    
    // Función para filtrar los proyectos según la categoría
    const filterProy = (categoryItem) => {
        if (categoryItem === 'Todos') {
            setProyectos(originalProyectos); // Mostrar todos los proyectos
        } else {
            const updatedItems = originalProyectos.filter((curElem) => {
                return curElem.category === categoryItem;
            });
            setProyectos(updatedItems);
        }
        setSelectedCategory(categoryItem);
    };

    return (
        <section className='work container section'>
            <h2 className='title-project'>Proyectos</h2>
            <p className='p-project'>Aqui encontraras proyectos realizados tanto en solitario como en equipo.</p>
            <div className='work-filters'>
                <span
                    className={`work-item ${selectedCategory === 'Todos' ? 'selected' : ''}`}
                    onClick={() => { filterProy('Todos'); setSelectedCategory('Todos'); }}
                >Todos</span>
                <span
                    className={`work-item ${selectedCategory === 'Frontend' ? 'selected' : ''}`}
                    onClick={() => { filterProy('Frontend'); setSelectedCategory('Frontend'); }}
                >FrontEnd</span>
                <span
                    className={`work-item ${selectedCategory === 'UX' ? 'selected' : ''}`}
                    onClick={() => { filterProy('UX'); setSelectedCategory('UX'); }}
                >UX</span>
            </div>

            <div className="work-container grid">
                {proyectos.map((elem) => {
                    const {id, workstation, title, summary, category, image } = elem;
                    const imageUrl = image && image.length > 0 && image[0].url
          ? `http://localhost:1337${image[0].url}` // Accede al primer elemento del array
          : 'URL_POR_DEFECTO'; // Usa una URL por defecto si no hay imagen
                    return (
                        <div className="card-container" key={id}>
                            <div className="image-container">
                                <img src={imageUrl} alt={title} />
                            </div>
                            <span className='card-category'>{category}</span>
                            <div className="info-container">
                                <div className="card-workstation">
                                    {workstation}
                                </div>
                                <div className="card-title">
                                    {title}
                                </div>
                                <div className="card-description">
                                    {summary}
                                </div>
                                <button className='card-button' onClick={()=>{const path=category=='UX'?'/pageux':'/pageweb'; navigate(path, {id:id});}}>Mas informacion <FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsFilter;