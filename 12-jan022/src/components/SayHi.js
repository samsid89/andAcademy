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
                        <h2>
                        <a href="">
                        Say hi,<br className="desk_hidden" /> AND begin 
your design career </a>
                        </h2>
                        <a className="link_arrow" href="#"><img src="./images/tick_icon.svg" alt="icon" /></a>
                        
                    </Col>
                    
                </Row>
                
                
            </Container>
            </section>
            
                </>
        );
       
    }
}

export default  SayHi;