import React from 'react';
import './page-ux.css';
import { useLocation } from 'react-router-dom';

const PageUx = () => {

  const location=useLocation();
  const {id}=location.id||{};

  return (
    <div>PageUx</div>
  )
}

export default PageUx;