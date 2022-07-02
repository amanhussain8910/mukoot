import React from 'react';
import '../../src/components/product.css';

const Products = () => {
  return (
    <div className="product-page-wrapper py-5">
      <div className="container">
        <div className="page-heading">
            <h2>Product <small>Our product</small></h2>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="product-page-box">
              <img src={process.env.PUBLIC_URL + '/images/helmets/1.png'} alt="" />
              <h4>Product Name <small>Full Face</small></h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-page-box">
              <img src={process.env.PUBLIC_URL + '/images/helmets/2.png'} alt="" />
              <h4>Product Name <small>Full Face</small></h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-page-box">
              <img src={process.env.PUBLIC_URL + '/images/helmets/3.png'} alt="" />
              <h4>Product Name <small>Full Face</small></h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-page-box">
              <img src={process.env.PUBLIC_URL + '/images/helmets/4.png'} alt="" />
              <h4>Product Name <small>Full Face</small></h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-page-box">
              <img src={process.env.PUBLIC_URL + '/images/helmets/5.png'} alt="" />
              <h4>Product Name <small>Full Face</small></h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-page-box">
              <img src={process.env.PUBLIC_URL + '/images/helmets/6.png'} alt="" />
              <h4>Product Name <small>Full Face</small></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products