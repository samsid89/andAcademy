import React from 'react';
import { Container, Row, Col, Accordion, Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Consumer } from './Context';


        
const Footer = (props) => {
    
        
        
        return(
            
            <>
            <footer className="Footer">
            
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={3}>
                        <h5>MEET US AT</h5>
                        <p>IIAD Campus,<br /> B-26, Okhla Phase-1,<br /> New Delhi 110020</p>
                        
                    </Col>
                    <Col md={3}>
                        <h5>WRITE TO US </h5>
                        <p><a href="mailto:apply@andacademy.com">apply@andacademy.com</a></p>
                        <p><a href="mailto:info@andacademy.com">info@andacademy.com</a></p>
                        <p className="socialMedai mob_hidden">
                        <a href="#"><img src="./images/twitter.svg" alt="" /></a>
                        <a href="#"><img src="./images/facebook.svg" alt="" /></a>
                        <a href="#"><img src="./images/linkedin.svg" alt="" /></a>
                        <a href="#"><img src="./images/instagram.svg" alt="" /></a>
                        <a href="#"><img src="./images/youtube.svg" alt="" /></a>
                        </p>
                        
                    </Col>
                    <Col md={3}>
                        <h5>CALL US ON</h5>
                        <p><a href="telto:919289281414">+91  9289 281414</a></p>
                        <p><a href="telto:911141380000">+91 11 4138 0000</a></p>
                        <p className="socialMedai desk_hidden">
                        <a href="#"><img src="./images/twitter.svg" alt="" /></a>
                        <a href="#"><img src="./images/facebook.svg" alt="" /></a>
                        <a href="#"><img src="./images/linkedin.svg" alt="" /></a>
                        <a href="#"><img src="./images/instagram.svg" alt="" /></a>
                        <a href="#"><img src="./images/youtube.svg" alt="" /></a>
                        </p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={3}>
                        <div className="">
                        <h5>KICKSTART COURSES </h5>
                        <p>
                        <a href="graphic-design-course">Graphic Design Diploma</a>
                        </p>
                        <p><a href="interior-design-course">Interior Design Diploma</a></p>
                        <p><a href="communication-design-pg-diploma">Communication Design PG Diploma</a></p>
                        </div>
                        
                        
                    </Col>
                    <Col md={3}>
                        <div className="">
                        <h5>ADVANCE COURSES </h5>
                        <p><a href="user-experience-design-course">User Experience Diploma</a></p>
                        <p><a href="motion-graphics-animation-course">Motion Graphics Diploma</a></p>
                        <p>
                        <a href="digital-brand-communication-course">Digital Brand Communication Diploma</a></p>
                        
                        </div>
                        
                    </Col>
                    <Col md={3}>
                        
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row className="copyright">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={10}>
                       <p>Copyright 2022 AND Academy  |  All Rights Reserved</p>
                       <a className="termsAnchor" href="pdf/Application_Portal_Term_&_Condition.pdf" target="_blank">Terms and Conditions</a>
                        
                    </Col>
                    
                    
                </Row>
                
                
            </Container>
            </footer>
            <div className="footer_fixed">
                <Container fluid>
                    <Row>
                        <Col xs={4}>
                        <Consumer>
                        {
                            ({data,handlecheck})=>(
                               
                                <a style={{cursor: 'pointer'}}  onClick={()=>{handlecheck(true)}}>ENQUIRY</a>
                            )
                        
                        }
                        </Consumer>
                            
                        </Col>
                        <Col xs={4}>
                            <a href="https://apply.andacademy.com/"  target={'_blank'}>APPLY NOW</a>
                        </Col>
                        <Col xs={4}>
                            <a href="#">CHAT</a>
                        </Col>
                    </Row>
                </Container>
            </div>
            
                </>
        );
       
    }

export default  Footer;