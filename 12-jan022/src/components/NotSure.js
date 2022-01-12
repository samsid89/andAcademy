import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Consumer } from './Context';

const NotSure = (props) => { 
   
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
                        <Consumer>
                        {
                            ({data,handlecheck})=>(
                                <a className="consult" style={{cursor: 'pointer'}}  onClick={()=>{handlecheck(true)}}>CONSULT CAREER ADVISORS <img src="./images/tick_icon_yellow.svg" alt="icon" /></a>
                            )
                        
                        }
                        </Consumer>
                        
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                
                
            </Container>
            </section>
            
                </>
        );
       
    }

export default  NotSure;