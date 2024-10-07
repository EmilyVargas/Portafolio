import React from 'react';
import Resume from '../resume/Resume.jsx';
import Contact from '../contact/Contact.jsx';
import Home from '../home/Home.jsx';
import Nav from '../nav/Nav.jsx';
import Footer from '../footer/Footer.jsx';
import ProjectsFilter from '../projects-filter/ProjectsFilter.jsx';

const PageIndex = () => {
  return (
    <>
    <Nav />
    <Home />
    <Resume />
    <ProjectsFilter />
    <Contact />
    <Footer />
    </>
  )
}

export default PageIndex;