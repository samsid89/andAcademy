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
                        <h2>
                        Start now
                        <img src="images/start.svg" alt="start" /> 
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