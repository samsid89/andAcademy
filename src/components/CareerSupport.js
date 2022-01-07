import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "../images/career_support_1.jpg";
import Image_2 from "../images/career_support_2.jpg";


class CareerSupport extends React.Component{
    render()
    {
        return(
            <>
            <section className="CareerSupport" id="CareerSupport">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                        <h2>
                        Career support<br /> you can count on
                        </h2>
                        <p>
                        Embark on your design career with AND Academy, get mentorship and placement support from start to finish, as well as throughout your professional career. 
                        </p>
                        
                    </Col>
                    <Col md={2}>
                    
                    </Col>
                </Row>
                <Row className="number_row first_numb_row">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                        <h4>
                        01
                        </h4>
                        <p>
                        Orientation with the Career Services Division.
                        </p>
                        
                    </Col>
                    <Col md={2}>
                    
                    </Col>
                    <Col md={2}>
                    <h4>
                        02
                        </h4>
                        <p>
                        Resume and  Linkedin Profile Building & Review
                        </p>
                    </Col>
                    <Col md={2}>
                    
                    </Col>
                    <Col md={2}>
                        <div className="back_img">
                            <div style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }} className="image_div"></div>
                        </div>
                    </Col>
                </Row>
                <Row className="number_row second_numb_row">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                        <div style={{ backgroundImage: 'url(' + Image_2 + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}  className="back_image_sq"></div>
                        
                    </Col>
                    <Col md={2}>
                    <h4>
                        03
                        </h4>
                        <p>
                        Interview training & communication coaching
                        </p>
                    </Col>
                    <Col md={2}>
                    
                    </Col>
                    <Col md={2}>
                    <h4>
                        04
                        </h4>
                        <p>
                        Develop an impressive Portfolio to showcase your work
                        </p>
                    </Col>
                    <Col md={2}>
                        
                    </Col>
                </Row>
                <Row className="number_row third_numb_row">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                    <h4>
                        05
                        </h4>
                        <p>
                        Networking and industry connections with AND Academy’s hiring partners
                        </p>
                        
                    </Col>
                    <Col md={2}>
                   
                    </Col>
                    <Col md={2}>
                    <h4>
                        06
                        </h4>
                        <p>
                        One-on-one offer negotiation and contract support
                        </p>
                    </Col>
                    <Col className="mob_hidden" md={2}>
                    
                    </Col>
                    <Col className="desk_hidden" md={2}>
                        <div style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}  className="back_image_sq"></div>
                        
                    </Col>
                    <Col className="white_col" md={2}>
                        
                    </Col>
                </Row>
                
                
                
                
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  CareerSupport;