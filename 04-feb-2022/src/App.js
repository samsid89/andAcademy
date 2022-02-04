import React, {useState,useEffect} from 'react';
import './index.css';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';
import {BrowserRouter, useLocation, Routes, Route} from 'react-router-dom';

import {Helmet} from "react-helmet";
import Home from './Home';
import Motion from './InnerPages/Motion';
import User from './InnerPages/User';
import Digital from './InnerPages/Digital';
import Graphic from './InnerPages/Graphic';
import Interior from './InnerPages/Interior';
import Communication from './InnerPages/Communication';
import ModalPopup from './components/ModalPopup';
import './popup.scss';
import './new_section_inner.scss';
import { Provider } from './components/Context';



function App() {
  
  const [show, setShow] = useState(false);
  const handleClose = () =>{  setShow(false)} 

  function openModal(val)
  {
    
    setShow(val)
  }

 const handleShow=true;
  
        const tagManagerArgs = {
          gtmId: 'GTM-W4VHW7X'
      }
      
      const [initialized, setInitialized] = useState(false);

        
        const location = useLocation();
      useEffect(() => {
        TagManager.initialize(tagManagerArgs)
        ReactGA.initialize('UA-215973243-1')
        
       
          setInitialized(true);

      }, [])

      useEffect(() => {
        if (initialized) {
        ReactGA.pageview(location.pathname + location.search);
        }
    }, []);

    const contextValue={
      data:show,
      handlecheck: openModal
  }

  return (
    <>
     
   
      <Provider value={contextValue}>
     <Routes>
            <Route path='/' element={
              <Home data={show}  />
              }></Route>
            <Route path="/motion-graphics-animation-course" element={
              <Motion data={show} ></Motion>
            }></Route>
            <Route path="/user-experience-design-course" element={
              <User data={show}></User>
            }></Route>
            <Route path="/digital-brand-communication-course" element={
              <Digital data={show}></Digital>
            }></Route>
            
            <Route path="/graphic-design-course" element={
              <Graphic data={show}></Graphic>
            }></Route>
            
            <Route path="/interior-design-course" element={
              <Interior data={show}></Interior>
            }></Route>
            <Route path="/communication-design-pg-diploma" element={
              <Communication data={show}></Communication>
            }></Route>
        </Routes>
       
        </Provider>
    </>
    
   
  );
}

export default App;
