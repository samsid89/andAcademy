import React from 'react';
import { Container, Row, Col, Accordion, Modal, Button } from 'react-bootstrap';


        
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
                        <p>Indian Institute of Art<br /> and Design (IIAD) B-26,<br /> Okhla Phase 1, New<br /> Delhi - 110020</p>
                        
                    </Col>
                    <Col md={3}>
                        <h5>WRITE TO US </h5>
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
                        <p><a href="telto:919871383633">+91  98713  83633</a></p>
                        <p><a href="telto:911141380000">+91  11 4138  0000</a></p>
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
                        <p><a href="#">Graphic Design Diploma</a></p>
                        <p><a href="#">Interior Design Diploma</a></p>
                        <p><a href="#">Communication Design PG Diploma</a></p>
                        </div>
                        
                        
                    </Col>
                    <Col md={3}>
                        <div className="">
                        <h5>ADVANCE COURSES </h5>
                        <p><a href="#">User Experience Diploma</a></p>
                        <p><a href="motion">Motion Graphics Diploma</a></p>
                        <p><a href="#">Digital Brand Communication Diploma</a></p>
                        
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
                       <p>Copyright 2021 AND Academy  |  All Rights Reserved</p>
                        
                    </Col>
                    
                    
                </Row>
                
                
            </Container>
            </footer>
            <div className="footer_fixed">
                <Container fluid>
                    <Row>
                        <Col xs={4}>
                            <a  onClick={props.data}>ENQUIRY</a>
                        </Col>
                        <Col xs={4}>
                            <a href="#">APPLY NOW</a>
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