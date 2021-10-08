import React from 'react';
import './Home.css';
import landingVector from "../../assets/landing-vector.svg";
import Header from '../partials/Header/Header';
import Modal from '../partials/Modal/Modal';

import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Home = () => {
    return (
      <div className="">
        <Header/>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <div>
                  <h2>Enhance your learning with</h2>
                  <h1><strong>EdEasy</strong></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br/> 
                    Fuga provident eaque facere, sunt sint quis nostrum dolorum.</p>
                  <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-ani0 FloatImg" data-aos="fade-left">
                <img src={landingVector} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="Footer mt-3">
            <div className="row p-0 m-0">
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start px-0 py-2">
                    <div className="Footer_Copyright pe-2 pe-md-4 ms-0 ms-md-5 fw-bold">
                      <CopyrightIcon style={{fontSize: "16px", marginTop: "-5px"}}/> EdEasy 2021
                    </div>
                    <div className="ms-0 ms-md-4 ps-2 ps-md-0">
                      edeasy123@gmail.com
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end py-2">
                  <span className="px-2">
                    <FacebookIcon />
                  </span>
                  <span className="px-2">
                    <InstagramIcon/>
                  </span>
                  <span className="px-2">
                    <TwitterIcon/>
                  </span>
                  <span className="px-2">
                    <MailOutlineIcon/>
                  </span>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home
  
  {/* <div className="container mt-5 pt-5 pt-md-3">
    <div className="row">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center order-md-last">
        <img src={landingVector} alt="" style={{width:"90%",height:"auto"}}/>
      </div>
      <div className="col-12 col-md-6">
        
      </div>
    </div>
  </div> */}
