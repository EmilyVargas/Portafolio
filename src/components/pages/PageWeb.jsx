import React from 'react';
import './page-web.css';
import { useLocation } from 'react-router-dom';

const PageWeb = () => {

  const location=useLocation();
  const {id}=location.id||{};
  
  return (
    <div>PageWeb</div>
  )
}

export default PageWeb;