import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MainFrame from './components/MainFrame.js';
import UpSkill from './components/UpSkill.js';
import About from './components/About.js';
import WhyEnd from './components/WhyEnd.js';
import Courses from './components/Courses.js';
import NotSure from './components/NotSure.js';
import HowWeTeach from './components/HowWeTeach.js';
import CareerSupport from './components/CareerSupport.js';
import MeettheMentors from './components/MeettheMentors.js';
import AdmissionProcess from './components/AdmissionProcess.js';
import StartNow from './components/StartNow.js';
import FAQ from './components/FAQ.js';
import SayHi from './components/SayHi.js';
import Footer from './components/Footer.js';
import Select from 'react-select';
import './style.scss';
import { Col, Modal, Button, Container, Row, Form } from 'react-bootstrap';
import TagManager from 'react-gtm-module'


const Root = () =>{
  const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const styles = {
          fontSize: 14,
          color: 'blue',
        }
        const options = [
          { value: 'COMMUNICATION DESIGN : PG DIPLOMA', label: 'COMMUNICATION DESIGN : PG DIPLOMA' },
          { value: 'MOTION GRAPHICS', label: 'MOTION GRAPHICS' },
          { value: 'USER EXPERIENCE', label: 'USER EXPERIENCE' },
          { value: 'DIGITAL BRAND COMMUNICATION', label: 'DIGITAL BRAND COMMUNICATION' },
          { value: 'GRAPHIC DESIGN', label: 'GRAPHIC DESIGN' },
          { value: 'INTERIOR DESIGN<', label: 'INTERIOR DESIGN' },
        ];
        const options1 = [
          { value: 'UG Student', label: 'UG Student' },
          { value: 'UG Student (Final Year)', label: 'UG Student (Final Year)' },
          { value: 'PG Student', label: 'PG Student' },
          { value: '0 Year Work Experience', label: '0 Year Work Experience' },
          { value: '1-2 Years Work Experience', label: '1-2 Years Work Experience' },
          { value: '2-4 Years Work Experience', label: '2-4 Years Work Experience' },
          { value: '4+ Years Work Experience', label: '4+ Years Work Experience' },
        ];
        const options2 = [
          { value: '+91', label: '+91' },
          { value: '+90', label: '+90' },
          { value: '00', label: '00' },
          { value: '02', label: '02' },
          { value: '03', label: '03' },
          { value: '04', label: '04' },
        ];

        const [colors,setColor]=useState("");


        function handleChange(e)
        {
          setColor(e.target.value)
        }

        function getData()
        {
          
          alert(colors)
        }
        const tagManagerArgs = {
          gtmId: 'GTM-W4VHW7X'
      }
      
      TagManager.initialize(tagManagerArgs)
    return(
      <>
      
        <MainFrame></MainFrame>
        <Header data={handleShow}></Header>
        <UpSkill></UpSkill>
        <About></About>
        <WhyEnd></WhyEnd>
        <Courses></Courses>
        <NotSure></NotSure>
        <HowWeTeach></HowWeTeach>
        <CareerSupport></CareerSupport>
        <MeettheMentors></MeettheMentors>
        <AdmissionProcess></AdmissionProcess>
        <StartNow></StartNow>
        <FAQ></FAQ>
        <SayHi></SayHi>
        <Footer data={handleShow}></Footer>
        <Modal className="brochure_box" show={show} onHide={handleClose} size="sm">
               
                <Modal.Body>
                <Button className="btn_Close" onClick={handleClose}>
                   <img src="./images/cross_popup.svg" alt="cross" />
                </Button>
                  <Container fluid>
                    <Row>
                      <Col md={2}>
                        <img src="./images/logo-vertical.svg" />
                      </Col>
                      <Col md={10}></Col>
                      <Col className="bord_bottom_broch" md={2}></Col>
                      <Col className="bord_bottom_broch" md={10}>
                      <Form>
                        <Form.Control type="text" placeholder="NAME" />
                        <Form.Control type="email" placeholder="E-MAIL" />
                        <Select 
                            options={options}
                            placeholder={'SELECT COURSE'}
                            clearable={false}
                            style={styles.select}
                            isSearchable={false}

                            
                        />
                        <Select 
                            options={options1}
                            placeholder={'SELECT EXPERIENCE'}
                            clearable={false}
                            style={styles.select}
                            isSearchable={false}

                            
                        />
                        <div className="phone_div">
                          <div className="phone_code">
                            <Select 
                                options={options2}
                                placeholder={'--'}
                                clearable={false}
                                style={styles.select}
                                isSearchable={false}
                            />
                          </div>
                          
                          <Form.Control className="telephone_inp" type="tel" placeholder="ENTER MOBILE NO." />
                        </div>
                        <Form.Control type="tel" placeholder="ENTER  OTP" />
                        <Button className="submit_button" type="button" onClick={getData}>
                          Submit
                        </Button>
                      </Form>
                      </Col>
                    </Row>
                  </Container>
                
                
                </Modal.Body>
                
            </Modal>
      </>
      
    );
  }



ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
