import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';


class About extends React.Component{
    render()
    {
        return(
            <>
            <section className="about"  id="about-us">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                    <Col md={6}>
                        <h1>
                        About
                        </h1>
                        <p>AND Academy is the brainchild of the founder of the Indian Institute of Art and Design (IIAD), a leading design school in India established in collaboration with Kingston School of Art, London.  <br /><br/>

With nearly a decade of experience in higher education, the team at AND Academy brings its expertise to online design education by offering in-demand programmes with an advanced curriculum. Our purpose is to transform access to design education by making it accessible, affordable, and industry-relevant. </p>
                    </Col>
                    <Col md={2}>
                        <div className="about_hlf_lef">
                            <div className="back_img"></div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="about_hlf_rigt">
                            <div className="back_img"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
                </>
        );
       
    }
}

export default  About;