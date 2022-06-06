import React from 'react';
import './HomeCategories.css';

const HomeCategories = () => {
    return (
        <div className='home-category-wrapper'>
            <div className="page-heading">
                <h2>Category <small>Our Catgory</small></h2>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 category-img">
                            <img src={process.env.PUBLIC_URL + '/images/helmets/1.png'} alt="Mukoot" />
                        </div>
                        <div className="col-md-6 category-text">
                            <h2>Half Face <span>Dura</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
                            <a className="btnred" href="/about">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 category-text text-end">
                            <h2>Half Face <span>Dura</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
                            <a className="btnred" href="/about">Explore Now</a>
                        </div>
                        <div className="col-md-6 category-img">
                            <img src={process.env.PUBLIC_URL + '/images/helmets/6.png'} alt="Mukoot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 category-img">
                            <img src={process.env.PUBLIC_URL + '/images/helmets/1.png'} alt="Mukoot" />
                        </div>
                        <div className="col-md-6 category-text">
                            <h2>Half Face <span>Dura</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
                            <a className="btnred" href="/about">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 category-text text-end">
                            <h2>Half Face <span>Dura</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
                            <a className="btnred" href="/about">Explore Now</a>
                        </div>
                        <div className="col-md-6 category-img">
                            <img src={process.env.PUBLIC_URL + '/images/helmets/6.png'} alt="Mukoot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 category-img">
                            <img src={process.env.PUBLIC_URL + '/images/helmets/1.png'} alt="Mukoot" />
                        </div>
                        <div className="col-md-6 category-text">
                            <h2>Half Face <span>Dura</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
                            <a className="btnred" href="/about">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 category-text text-end">
                            <h2>Half Face <span>Dura</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum placeat iure ut! Iusto ipsum aut explicabo at cupiditate esse provident? Quod modi dolorem maxime sunt, exercitationem temporibus pariatur vero.</p>
                            <a className="btnred" href="/about">Explore Now</a>
                        </div>
                        <div className="col-md-6 category-img">
                            <img src={process.env.PUBLIC_URL + '/images/helmets/6.png'} alt="Mukoot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCategories