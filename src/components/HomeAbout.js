import React from 'react';
import './HomeAbout.css';

const HomeAbout = () => {
  return (
    <div className="home-about-wrapper py-5">
        <div className="container">
            <div className="page-heading">
                <h2>About Mukoot <small>About Us</small></h2>
            </div>
            <div className="row align-items-center">
                <div className="col-md-4 home-about-text">
                    <h4>We design products to <span>style up</span> your helmet</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam error quis recusandae, unde ratione facere nihil dolor dignissimos vero modi, eius nesciunt.</p>
                    <a href="#" className="btnred">Explore More</a>
                </div>
                <div className="col-md-5">
                    <img src={process.env.PUBLIC_URL + '/images/about-img.jpg'} alt="" />
                </div>
                <div className="col-md-3">
                    <ul className="about-features">
                        <li>
                            <span><img src={process.env.PUBLIC_URL + '/images/icons/innovation.png'} alt="" /></span>
                            <h4>Innovation <small>We are motivated to build a range of new innovative products.</small></h4></li>
                        <li>
                            <span><img src={process.env.PUBLIC_URL + '/images/icons/quality.png'} alt="" /></span>
                            <h4>Quality <small>We are committed to providing high-quality services and products.</small></h4></li>
                        <li>
                            <span><img src={process.env.PUBLIC_URL + '/images/icons/design.png'} alt="" /></span>
                            <h4>Design <small>Delight our consumers and serve our customers through the high.</small></h4></li>
                        <li>
                            <span><img src={process.env.PUBLIC_URL + '/images/icons/excellence.png'} alt="" /></span>
                            <h4>Excellence <small>We are constantly strive to achieve the highest possible standards.</small></h4></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout