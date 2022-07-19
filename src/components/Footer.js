import { React, NavLink } from 'bootstrap-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <a href="/" className="logo"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" /></a>
                <div className="footer-nav">
                    <ul>
                      <li><NavLink to='/'>Home</NavLink></li>
                      <li><NavLink to='/about'>About</NavLink></li>
                      <li><NavLink to='/products'>Products</NavLink></li>
                      <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="social-media">
                  <ul>
                    <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icons/facebook.png'} alt="" /></a></li>
                    <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icons/instagram.png'} alt="" /></a></li>
                    <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icons/twitter.png'} alt="" /></a></li>
                    <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icons/youtube.png'} alt="" /></a></li>
                  </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © Mukoot Pvt Ltd. All Rights Reserved 2022</p>
        </div>
    </footer>
  )
}

export default Footer