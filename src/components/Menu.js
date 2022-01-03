import React from 'react';
import {Link} from 'react-router-dom';
import products from '../images/products.jpg';
import aboutus from '../images/aboutus.jpg';
import news from '../images/news.jpg';
import contactus from '../images/contactus.jpg';

function Menu(){

return (
  <div className='container menu'>
    <div className='row'>
      <Link className="col-md-6 nav-link" to="/about"><img src={products} alt="products" /></Link>
      <Link className="col-md-6 nav-link" to="/about"><img src={aboutus} alt="aboutus" /></Link>
    <div className='clearfix'></div>
      <Link className="col-md-6 nav-link" to="/about"><img src={news} alt="news" /></Link>
      <Link className="col-md-6 nav-link" to="/about"><img src={contactus} alt="contactus" /></Link>
    </div>
    </div>
  );
}

export default Menu;