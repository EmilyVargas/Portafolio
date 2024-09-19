import React from 'react';
import Resume from '../src/components/resume/Resume.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from '../src/components/home/Home.jsx';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
import ProjectsFilter from './components/projects-filter/ProjectsFilter.jsx';

const App = () => {
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

export default App