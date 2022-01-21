import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "../images/how_we_teach.jpg";


class HowWeTeach extends React.Component{
    render()
    {
        return(
            <>
            <section className="HowWeTeach">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                        <h2>
                        How we teach 
                        </h2>
                        
                        
                    </Col>
                    <Col md={2}>
                    <div className="back_img" style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </Col>
                </Row>
                <Row className="three_sec_row">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                        <h4>
                        LEARN<br /> TOGETHER
                        </h4>
                        <p>
                        Learn with your peers, collaborate and network. 
                        </p>
                        
                    </Col>
                    <Col md={2}>
                        <h4>
                        SYNCHRONOUS<br /> LEARNING 
                        </h4>
                        <p>
                        Classes support live interaction with faculty, mentors and peers  
                        </p>
                        
                    </Col>
                    <Col md={2}>
                        <h4>
                        LEARN FROM<br /> PRACTITIONERS 
                        </h4>
                        <p>
                        Get market-ready with our expert design mentors.
                        </p>
                        
                    </Col>
                    <Col md={4}>
                    <img className="full_width_img" src="./images/howweteach.jpg" alt="" />
                    </Col>
                </Row>
                <Row className="three_sec_row mob_hidden" style={{display: "none"}}>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                       
                        
                    </Col>
                    <Col md={2}>
                        
                        
                    </Col>
                    <Col md={2}>
                        
                        
                    </Col>
                    <Col md={4}>
                       <div style={{height: "150px"}} >&nbsp;</div>
                    </Col>
                    
                </Row>
                
                
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  HowWeTeach;