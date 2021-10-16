import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./Dashboard.css";
import Card1 from "../../assets/card1.svg";
import Card2 from "../../assets/card2.svg";
import Card3 from "../../assets/card3.svg";
import Card4 from "../../assets/card4.svg";
import Card5 from "../../assets/card5.svg";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { selectUserData} from '../../reduxSlices/authSlice';
const ClassList = () => {
  // const classes = [
  //   {
  //     "name":"Operating System",
  //     "admin":"Rishab Goyal",
  //     "desc":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, a!",
  //     "link":"https://meet.google.com/",
  //     "classCode" : "78495"
  //   },
  //   {
  //     "name":"Computer Networks",
  //     "admin":"Manish Dhameja",
  //     "desc":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, a!",
  //     "link":"https://meet.google.com/",
  //     "classCode" : "78495"
  //   },
  //   {
  //     "name":"Artificial Intelligence",
  //     "admin":"Jatin Bajaj",
  //     "desc":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, a!",
  //     "link":"https://meet.google.com/",
  //     "classCode" : "78495"
  //   },
  //   {
  //     "name":"Database",
  //     "admin":"Manish Dhameja",
  //     "desc":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, a!",
  //     "link":"https://meet.google.com/",
  //     "classCode" : "78495"
  //   },
  //   {
  //     "name":"Theory of Computation",
  //     "admin":"Manish Dhameja",
  //     "desc":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, a!",
  //     "link":"https://meet.google.com/",
  //     "classCode" : "78495"
  //   },
  // ]
  const [show, setShow] = useState(false);
  const toggle = () => setShow(prevState=>!prevState);
  const storeData = useSelector(selectUserData);
  const [owned, setOwned] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    if (storeData.token){
      console.log(storeData);
      axios.post("http://localhost:5000/classes/getClassrooms", {
        userEmail: storeData.userEmail,
        type:"owned"
      },{ headers: { Authorization: 'Bearer ' + storeData.token } }
      )
      .then((res)=>{
        console.log(res);
        setOwned(res.data);
      })
      .catch(err => console.log(err))
      axios.post("http://localhost:5000/classes/getClassrooms", {
        userEmail: storeData.userEmail,
        type:"enrolled"
      },{ headers: { Authorization: 'Bearer ' + storeData.token } }
      )
      .then((res)=>{
        console.log(res);
        setEnrolled(res.data);
      })
      .catch(err => console.log(err))
    }
  }, [storeData.token]);
  const RenderClasses = () => {
    return (  
      (owned.concat(enrolled)).map((sub,index) => {
        let backgroundStyle ={};
        let card = Card1;
        switch (index%5) {
          case 0 : {
            backgroundStyle = {backgroundColor:"#E5F8F0",borderRadius:"12px"};
            card=Card1;
          }
          break;
          case 1 : {
            backgroundStyle = {backgroundColor:"#FFF3DA",borderRadius:"12px"};
            card=Card2;
          }
          break;
          case 2 : {
            backgroundStyle = {backgroundColor:"#E9E9FF",borderRadius:"12px"};
            card=Card3;
          }
          break;
          case 3 : {
            backgroundStyle = {backgroundColor:"#FFE9E9",borderRadius:"12px"};
            card=Card4;
          }
          break;
          case 4 : {
            backgroundStyle = {backgroundColor:"#FEE2FF",borderRadius:"12px"};
            card=Card5;
          }
        }
        return (
          <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Link to={"/classes/"+sub.classCode} style={{maxWidth:"100%"}}>
              <div class="d-none d-md-flex card class-card card-width" style={backgroundStyle}>
                <img src={card} class="mx-auto mt-3" height="130px"/>
                <div class="card-body m-3 mx-md-4 rounded-3" style={{backgroundColor:"#fff"}}>
                  <h5 class="card-title heading-3 text-start mb-0">{sub.className}</h5>
                  <p class="card-text text-dark mb-1"><span class="text-muted" style={{fontSize:"16px"}}>{sub.adminName}</span></p>
                  <p class="card-text text-dark mb-1" style={{fontSize:"14px"}}>{sub.desc}</p>
                  <a href={sub.link} target="_blank" class="card-link text-primary">{sub.meetLink}</a>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    );
  }
  const RenderClassesMobile = () => {
    return (  
      (activeTab=="1"?owned:enrolled).map((sub,index) => {
        let backgroundStyle ={};
        let card = Card1;
        switch (index%5) {
          case 0 : {
            backgroundStyle = {backgroundColor:"#E5F8F0",borderRadius:"12px"};
            card=Card1;
          }
          break;
          case 1 : {
            backgroundStyle = {backgroundColor:"#FFF3DA",borderRadius:"12px"};
            card=Card2;
          }
          break;
          case 2 : {
            backgroundStyle = {backgroundColor:"#E9E9FF",borderRadius:"12px"};
            card=Card3;
          }
          break;
          case 3 : {
            backgroundStyle = {backgroundColor:"#FFE9E9",borderRadius:"12px"};
            card=Card4;
          }
          break;
          case 4 : {
            backgroundStyle = {backgroundColor:"#FEE2FF",borderRadius:"12px"};
            card=Card5;
          }
        }
        return (
          <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center card-width-mobile">
            <Link to={"/classes/"+sub.classCode} className="card-width-mobile">
              <div class="d-block d-md-none card mb-4" style={backgroundStyle}>
                <div class="row g-0">
                  <div class="col-4 d-flex justify-content-center">
                    <img src={card} class="img-fluid rounded-start px-2" width="100%"/>
                  </div>
                  <div class="col-8 d-flex align-items-center">
                    <div class="card-body">
                      <h5 class="card-title heading-3 text-start px-0 mb-0">{sub.className}</h5>
                      <p class="card-text text-dark mb-1"><span class="text-muted">{sub.adminName}</span></p>
                      <p class="card-text text-dark mobile-card-desc mb-1">{sub.desc}</p>
                      <a href={sub.link} target="_blank" class="card-link text-primary">{sub.meetLink}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    );
  }

  return ( 
    <>
      <div className="col-12">
        <div class="row my-3 ms-0 content-box d-none d-md-block pb-4">
          <div className="col-12 heading-2 d-flex py-3 pb-4 justify-content-center">
            Classes 
          </div>
          <div className="col-12">
            <div className="row g-md-4 gy-md-5 px-md-3">
              <RenderClasses/>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3 px-0 ms-0 d-block d-md-none">
        <div className="heading-2 ps-4">Classes</div>
        <div className="classes-navs ps-4">
          <button
            className={
              activeTab == "1" ? "active classes-nav-btn ps-0" : "classes-nav-btn ps-0"
            }
            onClick={() => setActiveTab("1")}
            style={{ cursor: "pointer" }}
          >
            Owned
          </button>
          <button
            className={
              activeTab == "2" ? "active classes-nav-btn" : "classes-nav-btn"
            }
            onClick={() => setActiveTab("2")}
            style={{ cursor: "pointer" }}
          >
            Enrolled
          </button>
        </div>
        <div className="col-12 content-box py-4 mobile-classlist">
          <div className="row px-3 pt-2">
            <RenderClassesMobile/>
          </div>
        </div>
      </div>
    </>
   );
}

export default ClassList;