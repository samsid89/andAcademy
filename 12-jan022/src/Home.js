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
    
    return (
        <>
         <Helmet>
              
              <link rel="stylesheet" href="css/MainStyles.css" />
              <link rel="stylesheet" href="https://unpkg.com/aos@2.3.0/dist/aos.css" />
              </Helmet>
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
    )
}
export default Home
