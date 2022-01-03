//import React from 'react';
import estonia from '../images/estonia.jpg';

function About(){

return(
  <div>
    <div className='container contactus'>
    <div className='row'>
        <h2>CONTACT US</h2>
        <div className='col-md-6'>
          <img src={estonia} alt="estonia" />
        </div>
        <div className='col-md-6 row'>
          <div className='col-md-6'>
            <p>Harju Makond, Tallinn</p>
            <p>Kesklinna, Linnaosa</p>
            <p>Narva mn 5, 10117</p>
            <p>Estonia</p>
          </div>
          <div className='col-md-6'>
            <p className='heading'>For Investors</p>
            <a href="mailto:david.h@helmda-systems.com">david.h@helmda-systems.com</a>
          </div>
          <div className='col-md-6'>
            <p className='heading'>General Inquires</p>
            <a href="mailto:info@helmda-systems.com">info@helmda-systems.com</a>
            <p>+3726027216</p>
          </div>
      </div>
    </div>
    </div>
    <div className='b1'>
      <div>
        <h6>Contact us</h6>
      </div>
      <span>Careers</span>
      <span>About us</span>
      <span>Mission</span>
      <span>Our Team</span>
  </div>
  </div>
  );
}

export default About;