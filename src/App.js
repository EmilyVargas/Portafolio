import React from 'react';
import Resume from '../src/components/resume/Resume.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from '../src/components/home/Home.jsx';
import Nav from './components/nav/Nav.jsx';
import Projects from './components/projects/Projects.jsx';

const App = () => {
  return (
    <>
    <Nav />
    <Home />
    <Resume />
    <Projects />
    <Contact></Contact>
    </>
  )
}

export default App