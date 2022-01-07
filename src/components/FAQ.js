import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';


class FAQ extends React.Component{
    render()
    {
        return(
            <>
            <section className="FAQ" id="FAQ">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                        <h2>
                        FAQs
                        </h2>
                        
                        
                    </Col>
                   <Col md={2}>
                   
                   </Col>
                </Row>
                <Row className="accordion_row">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                    <Accordion>
                        <Accordion.Item className="" eventKey="0">
                            <Accordion.Header>ON COURSES</Accordion.Header>
                            <Accordion.Body>
                            <strong>1.	Can I work full-time while being enrolled in this course?</strong><br />
                            Our courses are planned taking into consideration full-time working professionals who wish to develop their skills further. Classes will be conducted after working hours, so you have the flexibility to work while you learn.<br /><br />

                            <strong>2.	What is the difference between a Diploma course and a Certificate programme?</strong><br />
                            PG Diploma courses are designed for graduates from any background or skill-set and the course requires no prior knowledge or experience of design. Certificate Programs are designed for graduates from a graphic design background and are tailored to further develop your skills in your chosen field.<br /><br />

                            <strong>3.	What does the Career Support team do?</strong><br />
                            Our career support team will assist you with your job searches, get you prepared for interviews and help you build your professional portfolio.<br /><br />

                            <strong>4. What happens if I miss some of the live classes?</strong><br />
                            Recordings of sessions shared so you have access to the material at ease.<br /><br />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="" eventKey="1">
                            <Accordion.Header>ON CAREERS</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="" eventKey="2">
                            <Accordion.Header>ON ADMISSIONS</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        
                        
                    </Col>
                   <Col md={2}>
                   
                   </Col>
                </Row>
                
                
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  FAQ;