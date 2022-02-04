import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';


class StartNow extends React.Component{
    render()
    {
        return(
            <>
            <section className="StartNow">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={10}>
                        <h2 data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="600">
                        <a href="https://apply.andacademy.com/" target={'_blank'}>
                        Start now
                        <img src="images/start.svg" alt="start" /> 
                        </a>
                        </h2>
                        
                        
                    </Col>
                   
                </Row>
                
                
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  StartNow;