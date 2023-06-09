import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

function Login() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <>
      <div className='App-body w-100 text-white m-3 p-3'>

        <Container fluid expand="lg" >
          <Row xs lg="10" className='d-flex align-items-center'>
            {/* Login Content */}
            <Col xs lg="10" className="align-items-center">
              <Row className='d-flex align-items-center'>
                <Col lg="0" className='lg m-0 p-4' bg="white" data-aos="flip-right" data-aos-duration="1100">

                  <Card className='text-dark text-center' style={{ height: "75vh", width: "75vh" }}>
                    <Card.Title>
                      <Container className='d-flex justify-content-center p-3'>
                        <h5>Reviewer Login</h5>
                      </Container>
                    </Card.Title>
                    <Card.Body>
                      <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>                      
                          {/* <small class="align-content-center text-dark mt-3">New here ? <a class="nav-link"
                            href="register.html.html">Register</a> </small>                         */}
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="0" className='lg m-0 p-3' bg="white" data-aos="flip-left" data-aos-duration="1100">

                  <Card className='text-dark text-center' style={{ height: "75vh", width: "75vh" }}>
                    <Card.Title>
                      <Container className='d-flex justify-content-center p-3'>
                        <h5>Publication Login</h5>
                      </Container>
                    </Card.Title>
                    <Card.Body>
                      <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
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

export default Login;
