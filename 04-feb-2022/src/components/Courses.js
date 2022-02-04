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
                        <h2 data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="500">
                        Courses
                        </h2>
                        <p data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="600" className="mob_hidden">Our range of beginner to intermediate level courses are thoughtfully tailored for graduates and professionals looking to fast track their career in design. You can choose from a number of options, based on your interest, experience, needs and career goals. Learn online conveniently from anywhere with our flexible plans. </p>
                        <p className="desk_hidden">Check our kickstart and advance courses </p>
                        
                    </Col>
                    <Col md={2}>
                    <div className="back_img" style={{ backgroundImage: 'url(' + Image_1 + ')', backgroundSize: 'cover', backgroundPosition: 'center', display: 'none' }}></div>
                    </Col>
                </Row>
                <Row className="courses_below">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={4}>
                        <div className="kickstart_dv">
                        <h3 data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="700">
                        Kickstart
                        </h3>
                        <p data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="800">your career in design</p>
                        </div>
                        
                        <img data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="900" className="kick_icon" src="images/KICKSTART.svg" alt="kickstart" />
                        
                    </Col>
                    <Col md={6}>
                    <Accordion>
                        <Accordion.Item eventKey="0"  data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="1600">
                            <Accordion.Header>COMMUNICATION DESIGN : PG DIPLOMA
                            <div></div>
                            <span className="beginner">BEGINNER + INTERMEDIATE</span>
                            <span className="year">1 YEAR</span>
                            <span className="onCampus">ON-CAMPUS +</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body className="communication_body">
                            
                            <div class="full_dv first_full_dv">
                                <div className="hlf_dv">
                                PLACEMENT GUARANTEE
                                </div>
                                <div className="hlf_dv">
                                INDUSTRY INTEGRATED
                                </div>
                            </div>
                            <br />
                            <div className="intensive_div">
                            Intensive 1-Year industry integrated programme with a placement guarantee.  It offers you the most comprehensive syllabus from basics to industry-ready specialisation over two terms. 
                            </div>
                            <div class="full_dv">
                                <div className="hlf_dv table_look upper_term1">
                                    <div className="numb">TERM 1:</div>
                                    <div className="txt">
                                    In the first term of 20-weeks you will learn the fundamentals of visual communication across colour theory, composition, typography, creative thinking and design process.
                                    </div>
                                </div>
                                <div className="hlf_dv table_look upper_term2">
                                <div className="numb">TERM  2:</div>
                                    <div className="txt">
                                    In the second term of 20-weeks, you will specialize in a design field with our cohort-based interactive online classes alongside an industry internship, preparing you for the real world. <br /><br />

                                    Specialisations fields for term 2: <br />
                                    - User Experience design <br />
                                    - Motion Graphics <br />
                                    - Digital Brand Communications
                                    </div>
                                </div>
                            </div>
                            <div className="apply_div">
                                <div className="apply">
                                Apply by : 26.02.2022
                                </div>
                            
                                <div className="tick">
                                <a className="" href="communication-design-pg-diploma">
                                 Know More   <img src="./images/tick_icon.svg" alt="" /></a>
                                </div>
                            </div>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="blue" eventKey="1"  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1100">
                            <Accordion.Header>INTERIOR DESIGN
                            <div></div>
                            <span className="beginner">BEGINNER</span>
                            <span className="year">26 WEEKS</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            If you have a flair for spaces, turn your imagination into reality by learning how to plan, conceptualize and execute interior spaces. The art of creating exceptional interiors is a fine balance between aesthetics and functional design. Start your own design business or simply pursue your passion.
                                <div className="apply_div">
                                    <div className="apply">
                                    Apply by : 26.02.2022
                                    </div>
                                
                                    <div className="tick">
                                      <a className="" href="interior-design-course">
                                    Know More   <img src="./images/tick_icon_black.svg" alt="" /></a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="white" eventKey="2"  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1200">
                            <Accordion.Header>GRAPHIC DESIGN
                            <div></div>
                            <span className="beginner">BEGINNER</span>
                            <span className="year">20 WEEKS</span>
                            <span className="online">ONLINE </span>
                                
                            </Accordion.Header>
                            <Accordion.Body>
                            
                            
                            Learn how to visualize an idea from concept to impactful communications. You will learn how to create graphics, illustrations, gain mastery of digital tools and typographic applications. This will prepare you to design brand identities, brochures, web pages, social media, posters, signage and more.
                            <div className="apply_div">
                                <div className="apply">
                                Apply by : 26.02.2022
                                </div>
                            
                                <div className="tick">
                                <a className="" href="graphic-design-course">
                                 Know More   <img src="./images/tick_icon_red.svg" alt="" /></a>
                                </div>
                            </div>
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
                        <h3  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1300">
                        Advance
                        </h3>
                        <p  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1400">your career in design</p>
                        
                        
                    </Col>
                    <Col md={6}>
                    <Accordion>
                        <Accordion.Item className="yellow" eventKey="0"  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1500">
                            <Accordion.Header>USER EXPERIENCE DESIGN
                            <div></div>
                            <span className="beginner intermediate">INTERMEDIATE</span>
                            <span className="year">25 WEEKS</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            
                            Learn UX/UI from industry experts and join the fast-paced digital world where you will create apps, websites and other online interactive solutions that improves usability and accessibility with enhanced user experience.
                            <div className="apply_div">
                                <div className="apply">
                                Apply by : 26.02.2022
                                </div>
                            
                                <div className="tick">
                                <a className="" href="user-experience-design-course">
                                 Know More   <img src="./images/tick_icon_black.svg" alt="" /></a>
                                </div>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="black" eventKey="1"  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1600">
                            <Accordion.Header>MOTION GRAPHICS
                            <div></div>
                            <span className="beginner intermediate">INTERMEDIATE</span>
                            <span className="year">25 WEEKS</span>
                            <span className="online">ONLINE </span>
                            </Accordion.Header>
                            <Accordion.Body>
                            
                            Immerse yourself in the world of motion graphics and learn how to bring new life to static images using animation and visual effects. Create content, graphics, and animation for websites, video games, and smartphones, including apps.
                            <div className="apply_div">
                                <div className="apply">
                                Apply by : 26.02.2022
                                </div>
                            
                                <div className="tick">
                                <a className="" href="motion-graphics-animation-course">
                                 Know More   <img src="./images/tick_icon.svg" alt="" /></a>
                                </div>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="" eventKey="2"  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1700">
                            <Accordion.Header>DIGTIAL BRAND COMMUNICATION
                            <div></div>
                            <span className="beginner intermediate">INTERMEDIATE</span>
                            <span className="year">25 WEEKS</span>
                            <span className="online">ONLINE </span>
                                
                            </Accordion.Header>
                            <Accordion.Body>
                            Become a savvy expert in shaping brand experiences across digital platforms. Create unique brand stories to shape how companies and institutions amplify brand presence in a competitive world and make an impact.
                            <div className="apply_div">
                                <div className="apply">
                                Apply by : 26.02.2022
                                </div>
                            
                                <div className="tick">
                                <a className="" href="digital-brand-communication-course">
                                 Know More   <img src="./images/tick_icon.svg" alt="" /></a>
                                </div>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        <div  data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="1720" className="desk_hidden width_full"><img src="./images/courses_images.jpg" alt="" /></div>
                    </Col>
                </Row>
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  Courses;