import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="header-top">
            <p>Welcome to <span>Mukoot</span> Helmets</p>
            <ul>
                <li><a href="mailto:support@mukoot.com"><i className="fa fa-envelope-o"></i> support@mukoot.com</a></li>
                <li><a href="tel:8800298396"><i className="fa fa-phone"></i> +91 8800298396</a></li>
            </ul>
        </div>
        <div className="header-bottom">
            <Link to='/' className='logo'><img src={process.env.PUBLIC_URL + '/images/logo-white.svg'} alt="Mukoot" /> </Link>
            <nav>
                <div className="navibar">
                    <ul>
                        <li><NavLink to='/'><span>Home</span> Home</NavLink></li>
                        <li><NavLink to='/about'><span>About</span> About</NavLink></li>
                        <li><NavLink to='/products'><span>Products</span>Products</NavLink></li>
                        <li><NavLink to='/contact'><span>Contact</span>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header