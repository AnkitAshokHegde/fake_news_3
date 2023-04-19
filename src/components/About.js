import React from 'react'

import ad from './images/ad-1.png';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function About() {
  
  useEffect(() => {
      AOS.init();
     }, []);
  
  return (
    <>
      <div className='App-body w-100 text-white m-3 p-3' style={{ height: '100vh' }}>

        <Container fluid expand="lg">
          <Row>
            {/* About us Content */}
            <Col xs lg="10" class>
              <Row data-aos="fade-up" data-aos-duration="1100">
                <Col xs ys lg="0" className='lg m-0 p-3' bg="white">

                  <Card className='text-dark text-center' style={{ height: "90vh" }}>
                    <Card.Title>
                      <Container className='d-flex justify-content-center p-3'>
                        <h5>About us</h5>
                      </Container>
                    </Card.Title>
                    <Card.Body>
                      <p>Not that much to say man.....</p> 
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* Advertizement content  */}

            <Col bg="light" data-aos="zoom-in-left" data-aos-duration="1100">
              <Container>
                <Image src={ad} rounded className='mt-3 ml-3' style={{ width: '22vh' }} />
              </Container>

            </Col>
          </Row>
        </Container>
      </div >
    </>
  )
}

export default About;