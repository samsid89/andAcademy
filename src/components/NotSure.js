import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';


class NotSure extends React.Component{
    render()
    {
        return(
            <>
            <section className="NotSure">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={8}>
                        <h2>
                        Not sure about which 
                        programme to pick ? 
                        </h2>
                        <a className="consult" href="#">CONSULT CAREER ADVISORS <img src="./images/tick_icon_yellow.svg" alt="icon" /></a>
                        
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

export default  NotSure;