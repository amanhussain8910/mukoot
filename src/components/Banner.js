import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-wrapper">
        <div className="banner-text">
            <h1>Welcome to <span>Mukoot</span> Helmets</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
            <Link to="/about" className='btnred'>Explore Mukoot</Link>
        </div>
    </div>
  )
}

export default Banner