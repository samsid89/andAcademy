import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';


class SayHi extends React.Component{
    render()
    {
        return(
            <>
            <section className="sayHi" id="contact">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={10}>
                        <h2 data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="600">
                        <a href="https://apply.andacademy.com/" target={'_blank'}>
                        Say hi,<br className="desk_hidden" /> AND begin 
your design career </a>
                        </h2>
                        <div data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="800">
                        <a className="link_arrow" href="https://apply.andacademy.com/" target={'_blank'}><img src="./images/tick_icon.svg" alt="icon" /></a>
                        </div>
                        
                        
                    </Col>
                    
                </Row>
                
                
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  SayHi;