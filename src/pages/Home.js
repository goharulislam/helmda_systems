//import React from 'react';
import helmet from '../images/helmet.png';

function Home(){

return (
  <div className="container">
  <div className="row">
  <div className="col-md-12 home">
    <p>01</p>
    <h1>Galeax-A</h1>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className='i1' src={helmet} alt="helmet" />
        <div className='clearfix'></div>
        <button>Discover</button>
      </div>
    <div className="carousel-item">
      <img className='i1' src={helmet} alt="helmet" />
      <div className='clearfix'></div>
      <button>Discover</button>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Home;