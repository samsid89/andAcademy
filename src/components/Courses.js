import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Image_1 from "../images/courses_images.jpg";


class Courses extends React.Component{
    render()
    {
        return(
            <>
            <section className="Courses" id="Courses">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                        <h2>
                        Courses
                        </h2>
                        <p className="mob_hidden">Our range of beginner to intermediate level courses are thoughtfully tailored for graduates and professionals looking to fast track their career in design. You can choose from a number of options, based on your interest, experience, needs and career goals. Learn online conveniently from anywhere with our flexible plans. </p>
                        <p className="desk_hidden">Check our kickstart and advance courses </p>
                        
                    </Col>
                    <Col md={2}>
                    <div className="back_img" style={{ backgroundImage: 'url(' + Image_1 + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </Col>
                </Row>
                <Row className="courses_below">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={4}>
                        <div className="kickstart_dv">
                        <h3>
                        Kickstart
                        </h3>
                        <p>your career in design</p>
                        </div>
                        
                        <img className="kick_icon" src="images/KICKSTART.svg" alt="kickstart" />
                        
                    </Col>
                    <Col md={6}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>COMMUNICATION DESIGN : PG DIPLOMA
                            <div></div>
                            <span className="beginner">BEGINNER + INTERMEDIATE</span>
                            <span className="year">1 YEAR</span>
                            <span className="onCampus">ON-CAMPUS +</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            <a className="pos_abs_anch" href="#"></a>
                            <div class="full_dv">
                                <div className="hlf_dv">
                                PLACEMENT GUARANTEE
                                </div>
                                <div className="hlf_dv">
                                INDUSTRY INTEGRATED
                                </div>
                            </div>
                            <br /><br />
                            TERMS
                            <div class="full_dv">
                                <div className="hlf_dv table_look">
                                    <div className="numb">1</div>
                                    <div className="txt">
                                    Fundamentals of graphic design
                                    </div>
                                </div>
                                <div className="hlf_dv table_look">
                                <div className="numb">2</div>
                                    <div className="txt">
                                    Specialisation course in user experience/ digital brand communication/ motion graphics 
along with an industry internship 
                                    </div>
                                </div>
                            </div>
                            <div className="apply_div">
                                <div className="apply">
                                Apply by : 15.01.22
                                </div>
                            
                                <div className="tick">
                                    <img src="./images/tick_icon.svg" alt="" />
                                </div>
                            </div>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="blue" eventKey="1">
                            <Accordion.Header>INTERIORS DESIGN
                            <div></div>
                            <span className="beginner">BEGINNER</span>
                            <span className="year">26 WEEKS</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            <a className="pos_abs_anch" href="#"></a>
                            If you have a flair for spaces, turn your imagination into reality by learning how to plan, conceptualize and execute interior spaces. The art of creating exceptional interiors is a fine balance between aesthetics and functional design. Start your own design business or simply pursue your passion.
                                <div className="apply_div">
                                    <div className="apply">
                                    Apply by : 15.01.22
                                    </div>
                                
                                    <div className="tick">
                                        <img src="./images/tick_icon_black.svg" alt="" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="white" eventKey="2">
                            <Accordion.Header>GRAPHIC DESIGN
                            <div></div>
                            <span className="beginner">BEGINNER</span>
                            <span className="year">20 WEEKS</span>
                            <span className="online">ONLINE </span>
                                
                            </Accordion.Header>
                            <Accordion.Body>
                            
                            <a className="pos_abs_anch" href="#"></a>
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
                </Row>
                <Row className="courses_below">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={4}>
                        <h3>
                        Advance
                        </h3>
                        <p>your career in design</p>
                        
                        
                    </Col>
                    <Col md={6}>
                    <Accordion>
                        <Accordion.Item className="yellow" eventKey="0">
                            <Accordion.Header>USER EXPERIENCE DESIGN
                            <div></div>
                            <span className="beginner intermediate">INTERMEDIATE</span>
                            <span className="year">25 WEEKS</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            <a className="pos_abs_anch" href="#"></a>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="black" eventKey="1">
                            <Accordion.Header>MOTION GRAPHICS
                            <div></div>
                            <span className="beginner intermediate">INTERMEDIATE</span>
                            <span className="year">25 WEEKS</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            <a className="pos_abs_anch" href="#"></a>
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
                            <Accordion.Header>DIGTIAL BRAND COMMUNICATION
                            <div></div>
                            <span className="beginner intermediate">INTERMEDIATE</span>
                            <span className="year">25 WEEKS</span>
                            <span className="online">ONLINE </span>
                                
                            </Accordion.Header>
                            <Accordion.Body>
                            <a className="pos_abs_anch" href="#"></a>
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
                        <div className="desk_hidden width_full"><img src="./images/courses_images.jpg" alt="" /></div>
                    </Col>
                </Row>
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  Courses;