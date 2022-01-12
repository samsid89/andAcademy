import React, {useEffect} from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from '../lotties/transform.json';
import { Consumer } from './Context';

const Header = (props) => {
    
    console.log(props.data);
   
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "noScale"
            }
          };
           // Sticky Menu Area
        useEffect(() => {
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        });
    
               
        /* Method that will fix header after a specific scrollable */
               const isSticky = (e) => {
                    const header = document.querySelector('.header_inner');
                    const scrollTop = window.scrollY;
                    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
                };
                const show = () => {
                    const navShow = document.querySelector('.main_menu');
                    navShow.classList.add('show');
                  }
                  const remove = () => {
                    const navShow = document.querySelector('.main_menu');
                    navShow.classList.remove('show');
                  }
                  
                  
                  
        return(
           
            <>
            <header className="main_head" >
            <Container fluid>
                <Row>
                    <Col md={2} >
                    <div className="header_inner">
                    <div className='logo'>
                        <a href="#"><img src="./images/logo-vertical.svg" alt="And Academy" /></a>
                    </div>
                    <button onClick={show} className="toggle_button"><span className="top_line"></span><span className="bottom_line"></span></button>
                    <Nav defaultActiveKey="#home" className="flex-column main_menu">
                    <button onClick={remove} className="toggle_button"><span className="top_line"></span><span className="bottom_line"></span></button>
                        <Nav.Link href="#about-us">ABOUT</Nav.Link>
                        <Nav.Link href="#Courses">COURSES</Nav.Link>
                        <Nav.Link href="#CareerSupport">CAREER SUPPORT</Nav.Link>
                        <Nav.Link href="#MeettheMentors">MENTORS</Nav.Link>
                        <Nav.Link href="#AdmissionProcess">ADMISSIONS</Nav.Link>
                        <Nav.Link href="#FAQ">FAQs</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                        
                        <Consumer>
                        {
                            ({data,handlecheck})=>(
                                <Nav.Link className="last_links" eventKey="link-2" onClick={()=>{handlecheck(true)}}>ENQUIRY <img src="./images/arrow_up.svg"/></Nav.Link>
                            )
                        
                        }
                        </Consumer>
                        
                        <Nav.Link className="last_links" eventKey="link-2">APPLY NOW <img src="./images/arrow_up.svg"/></Nav.Link>
                    </Nav>
                    </div>
                    </Col>
                    <Col md={8}>
                    
                    <div className='transform_div' >
                            
                            <Lottie  options={defaultOptions} />
    
    
                            </div>
                    </Col>
                    <Col className="explore_col" md={2}>
                        <div className="explor_dv_hght" style={{height: '100vh'}}>
                        
                            <a className="explore_anch" href="#Courses">
                            <span className="img_span"><img src="./images/arrow_large.svg" /></span>
                            <span className="txt_span">EXPLORE COURSES</span></a>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
            </header>
                </>
                
        );
       
}

export default  Header;