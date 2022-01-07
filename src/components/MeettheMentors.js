import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
        carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;

    return (
        <div className="carousel-button-group">
            <button aria-label="Go to previous slide"
                className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"}
                onClick={() => previous()}></button>
            <button aria-label="Go to next slide" 
                className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"}
                onClick={() => next()}></button>
        </div>
    );
};

class MeettheMentors extends React.Component{
    
    render()
    {
        
        return(
            
            <>
            <section className="MeettheMentors" id="MeettheMentors">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                        <h2>Meet the mentors
                        </h2>
                        <p>
                        Our team of world-class experts from leading organisations, renowned academicians, team leaders in prominent startups and entrepreneurs running creative businesses. They are here to guide and support you to your destination.
                        </p>
                        
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                <Row className="meetSecondRow">
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                    <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside
                            customButtonGroup={<ButtonGroup
                                next={this.props.next}
                                previous={this.props.previous}
                                rest={this.props.rest} />}>
                    <div>
                        <img
                            className="d-block w-100"
                            src="./images/jitin.jpg"
                            alt=""
                            />
                            
                            <h3>Anthony lopez</h3>
                            <h4>FOUNDER @LOPEZ DESIGN</h4>
                            <p>His passion for excellence in ideation,  is backed up with his philosophy ‘The why of what we do is more important than what we do’. His empathetic and people-driven approach has garnered the trust of leading organizations.</p>
                    </div>
                    <div>
                    <img
                            className="d-block w-100"
                            src="./images/profile-2.jpg"
                            alt=""
                            />
                            
                            <h3>Anthony lopez</h3>
                            <h4>FOUNDER @LOPEZ DESIGN</h4>
                            <p>His passion for excellence in ideation,  is backed up with his philosophy ‘The why of what we do is more important than what we do’. His empathetic and people-driven approach has garnered the trust of leading organizations.</p>
                    </div>
                    <div>
                    <img
                            className="d-block w-100"
                            src="./images/profile-3.jpg"
                            alt=""
                            />
                            
                            <h3>Anthony lopez</h3>
                            <h4>FOUNDER @LOPEZ DESIGN</h4>
                            <p>His passion for excellence in ideation,  is backed up with his philosophy ‘The why of what we do is more important than what we do’. His empathetic and people-driven approach has garnered the trust of leading organizations.</p>
                    </div>
                    <div>
                    <img
                            className="d-block w-100"
                            src="./images/profile-4.jpg"
                            alt=""
                            />
                            
                            <h3>Anthony lopez</h3>
                            <h4>FOUNDER @LOPEZ DESIGN</h4>
                            <p>His passion for excellence in ideation,  is backed up with his philosophy ‘The why of what we do is more important than what we do’. His empathetic and people-driven approach has garnered the trust of leading organizations.</p>
                    </div>
                    <div>
                    <img
                            className="d-block w-100"
                            src="./images/profile-2.jpg"
                            alt=""
                            />
                            
                            <h3>Anthony lopez</h3>
                            <h4>FOUNDER @LOPEZ DESIGN</h4>
                            <p>His passion for excellence in ideation,  is backed up with his philosophy ‘The why of what we do is more important than what we do’. His empathetic and people-driven approach has garnered the trust of leading organizations.</p>
                    </div>
                    <div>
                    <img
                            className="d-block w-100"
                            src="./images/profile-4.jpg"
                            alt=""
                            />
                            
                            <h3>Anthony lopez</h3>
                            <h4>FOUNDER @LOPEZ DESIGN</h4>
                            <p>His passion for excellence in ideation,  is backed up with his philosophy ‘The why of what we do is more important than what we do’. His empathetic and people-driven approach has garnered the trust of leading organizations.</p>
                    </div>
                    </Carousel>
                    
                        
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

export default  MeettheMentors;