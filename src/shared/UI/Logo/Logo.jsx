import React from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link
import "../../../app/Fonts/typograhy.css";  
import "./Logo.css";

function Logo() {
  return (
    <div>
      <Link className='Post-No title-out logo' to="/">
        <h2>PORTEN</h2>
      </Link>
    </div>
  );
}

export default Logo;
