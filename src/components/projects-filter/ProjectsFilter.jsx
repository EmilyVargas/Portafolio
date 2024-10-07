import React, { useState } from 'react';
import './ProjectsFilter.css';
import Menu from './Menu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigate } from 'react-router-dom';

const ProjectsFilter = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })
        setItems(updatedItems);
    }
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const navigate=useNavigate();

    return (
        <section className='work container section' id='work'>
            <h2 className='title-project'>Proyectos</h2>
            <p className='p-project'>Aqui encontraras proyectos realizados tanto en solitario como en equipo.</p>
            <div className='work-filters'>
                <span
                    className={`work-item ${selectedCategory === 'Todos' ? 'selected' : ''}`}
                    onClick={() => { setItems(Menu); setSelectedCategory('Todos'); }}
                >Todos</span>
                <span
                    className={`work-item ${selectedCategory === 'Frontend' ? 'selected' : ''}`}
                    onClick={() => { filterItem('Frontend'); setSelectedCategory('Frontend'); }}
                >FrontEnd</span>
                <span
                    className={`work-item ${selectedCategory === 'UX' ? 'selected' : ''}`}
                    onClick={() => { filterItem('UX'); setSelectedCategory('UX'); }}
                >UX</span>
            </div>

            <div className="work-container grid">
                {items.map((elem) => {
                    const { id, image, workstation, title, description, category } = elem;
                    return (
                        <div className="card-container" key={id}>
                            <div className="image-container">
                                <img src={image} alt="" />
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
                                    {description}
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