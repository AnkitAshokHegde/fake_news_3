import React from 'react';

import ad from './images/ad-1.png';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function Contact() {
  return (
    <>
      <div className='App-body w-100 text-white m-3 p-3' style={{ height: '100vh' }}>

        <Container fluid expand="lg">
          <Row>
            {/* News Content */}
            <Col xs lg="10" >
              <Row>
                <Col xs ys lg="0" className='lg m-0 p-3' bg="white">

                  <Card className='text-dark text-center' style={{ height: "20rem" }}>
                    <Card.Title>
                      <Container className='d-flex justify-content-center p-3'>
                        <h5>Contact us</h5>
                      </Container>
                    </Card.Title>
                    <Card.Body>
                      <p> Please don't. I was kidding earlier....</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* Advertizement content  */}

            <Col bg="light">
              <Container>
                <Image src={ad} rounded className='mt-3 ml-3' style={{ width: '22vh' }} />
              </Container>

            </Col>
          </Row>
        </Container>
      </div ></>
  )
}

export default Contact;