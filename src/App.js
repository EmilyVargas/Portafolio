import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageIndex from './components/pages/PageIndex.jsx';
import PageUx from './components/pages/PageUx.jsx';
import PageWeb from './components/pages/PageWeb.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageIndex />} />
        <Route path='/pageux' element={<PageUx />} />
        <Route path='/pageweb' element={<PageWeb />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;