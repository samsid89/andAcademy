import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Image from "../images/why_end_image.jpg";


class WhyEnd extends React.Component{
    render()
    {
        return(
            <>
            <section className="whyEnd">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={6}>
                        <h2>
                        Why AND Academy?
                        </h2>
                        
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                <Row className="andacademy_row">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                        <div className="andacademy_part">
                            <div className="part_inner">
                            <p>Get professional mentorship and</p>
                            <img src="./images/EXCEL.svg" alt="excel" />
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="andacademy_part">
                        <div className="red_background"></div>
                        <div className="part_inner part_inner_2">
                        <p>Learn through collaboration and</p>
                            <img src="images/GROW.svg" alt="GROW" />
                            </div>
                           <div className="black_background"></div>
                        </div>
                    </Col>
                    <Col className="desk_hidden" md={2}>
                    <div className="andacademy_part">
                        <div className="part_inner part_inner_5">
                       
                            </div>
                            <div className="black_background"></div>
                        </div>
                    </Col>
                    <Col className="desk_hidden" md={2}>
                    <div className="andacademy_part">
                        <div style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}  className="part_inner part_inner_5">
                       
                            </div>
                            <div className="black_background"></div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="andacademy_part">
                        <div className="red_background"></div>
                        <div className="part_inner part_inner_3">
                        
                        <img src="images/build-1.svg" alt="build" />
                        <p>a lucrative career and pursue your passion</p>
                            </div>
                            
                           <div className="black_background"></div>
                            
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="andacademy_part">
                        <div className="red_background"></div>
                        <div className="part_inner part_inner_4">
                        <p>Attend classes</p>
                            <img src="images/AND.svg" alt="AND" />
                            <p>work simultaneously</p>
                            </div>
                            <div className="black_background"></div>
                        </div>
                    </Col>
                    <Col className="mob_hidden" md={2}>
                    <div className="andacademy_part">
                        <div className="part_inner part_inner_5" style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                       
                            </div>
                            <div className="black_background"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  WhyEnd;