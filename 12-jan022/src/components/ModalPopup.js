import React, {useState,useEffect} from 'react';
import Select from 'react-select';
import { Col, Modal, Button, Container, Row, Form } from 'react-bootstrap';
import { Consumer } from './Context';

function ModalPopup(props) {
  const [show, setShow] = useState(false);
        const handleClose = () =>{  setShow(false)} 
       const handleShow = ()=>{setShow()}

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
  
  return (
    <>
          <Consumer>
          {
            ({handlecheck})=>(
              <Modal className="brochure_box" show={props.data}  size="sm" onHide={()=>{handlecheck(false)}}>
               
               <Modal.Body>
               <Button className="btn_Close" onClick={()=>{handlecheck(false)}}>
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
                       <Button className="submit_button" type="button" >
                         Submit
                       </Button>
                     </Form>
                     </Col>
                   </Row>
                 </Container>
               
               
               </Modal.Body>
               
           </Modal>
            )
          
          }
          
          </Consumer>
         
           
        </>
  )
}

export default ModalPopup
