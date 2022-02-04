import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MainFrame from './components/MainFrame.js';
import UpSkill from './components/UpSkill.js';
import About from './components/About.js';
import WhyEnd from './components/WhyEnd.js';
import Courses from './components/Courses.js';
import NotSure from './components/NotSure.js';
import HowWeTeach from './components/HowWeTeach.js';
import CareerSupport from './components/CareerSupport.js';
import MeettheMentors from './components/MeettheMentors.js';
import AdmissionProcess from './components/AdmissionProcess.js';
import StartNow from './components/StartNow.js';
import FAQ from './components/FAQ.js';
import SayHi from './components/SayHi.js';
import Footer from './components/Footer.js';
import {Helmet} from "react-helmet";
import ModalPopup from './components/ModalPopup.js';
import ScriptTag from 'react-script-tag';
import $ from 'jquery';
import AOS from 'aos';

function Home(props) {
    AOS.init();
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  
  const Background="../images/logo-vertical.svg";
useEffect(() => {
  

  setTimeout(()=>{setLoading(false)},1500)
  


}, [])
    return (
        <>
         <Helmet>
              
              <link rel="stylesheet" href="css/MainStyles.css" />
              <link rel="stylesheet" href="https://unpkg.com/aos@2.3.0/dist/aos.css" />
              <meta name="description" content="No. 1 Design School for upskilling and career advancement. Learn Graphic Design, Interior Design, UX/UI Design, Motion Graphics and much more. Explore our online courses "/>
              <meta name="keywords" content="design course, design courses, designing courses in India, online design courses, design courses online, designing courses in India, AND Academy"/>
              <title>AND Academy | Transform your Career with Design</title>
              
              </Helmet>
              {
                loading ? 
         
         <div style={{width:"100%",height:"100vh",backgroundColor:"red",backgroundImage:"url(" + Background + ")",backgroundRepeat:"no-repeat", backgroundSize:"40px", backgroundPosition:"center" }}></div>
          
         : 
              <> 
        <MainFrame></MainFrame>
        <Header data={props.showmodal}></Header>
        <UpSkill></UpSkill>
        <About></About>
        <WhyEnd></WhyEnd>
        <Courses></Courses>
        <NotSure data={props.showmodal}></NotSure>
        <HowWeTeach></HowWeTeach>
        <CareerSupport></CareerSupport>
        <MeettheMentors></MeettheMentors>
        <AdmissionProcess></AdmissionProcess>
        <StartNow></StartNow>
        <FAQ></FAQ>
        <SayHi></SayHi>
        <Footer></Footer>
        <ModalPopup data={props.data}></ModalPopup>
        </>
    }
        </>
    )
}
export default Home
