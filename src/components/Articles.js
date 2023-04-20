import React from 'react';

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
import './ComponentCss.css';


function Articles() {

    useEffect(() => {
        AOS.init(); 
       }, []);

  return (
    <div className='App-body w-100 text-white m-3 p-3' style={{ height: '100vh' }}>

            <Container fluid expand="lg">
                <Row>
                    {/* Articles Content */}
                    <Col xs lg="10" >
                        <Row>
                            <Col className='lg m-0 p-3' bg="white" data-aos="fade-up-left" data-aos-duration="1100">

                                <Card className='text-dark text-center' style={{ height: "20rem" }}>
                                    <Card.Title>
                                        <Container className='d-flex justify-content-between p-3'>
                                            <h5>Article</h5>
                                            <Badge bg="warning">Blank</Badge>
                                        </Container>
                                    </Card.Title>
                                    <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Card.Body>
                                    <a href='#' className='text-dark'><p>Read more</p></a>
                                </Card>
                            </Col>
                            <Col className='lg m-0 p-3' bg="white" data-aos="fade-up-right" data-aos-duration="1100">

                                <Card className='text-dark text-center' style={{ height: "20rem" }}>
                                    <Card.Title>
                                        <Container className='d-flex justify-content-between p-3'>
                                            <h5>Article</h5>
                                            <Badge bg="warning">Blank</Badge>
                                        </Container>
                                    </Card.Title>
                                    <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Card.Body>
                                    <a href='#' className='text-dark'><p>Read more</p></a>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='lg m-0 p-3' bg="white" data-aos="fade-down-left" data-aos-duration="1100">

                                <Card className='text-dark text-center' style={{ height: "20rem" }}>
                                    <Card.Title>
                                        <Container className='d-flex justify-content-between p-3'>
                                            <h5>Article</h5>
                                            <Badge bg="warning">Blank</Badge>
                                        </Container>
                                    </Card.Title>
                                    <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Card.Body>
                                    <a href='#' className='text-dark'><p>Read more</p></a>
                                </Card>
                            </Col>
                            <Col className='lg m-0 p-3' bg="white" data-aos="fade-down-right" data-aos-duration="1100">

                                <Card className='text-dark text-center' style={{ height: "20rem" }}>
                                    <Card.Title>
                                        <Container className='d-flex justify-content-between p-3'>
                                            <h5>Article</h5>
                                            <Badge bg="warning">Blank</Badge>
                                        </Container>
                                    </Card.Title>
                                    <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Card.Body>
                                    <a href='#' className='text-dark'><p>Read more</p></a>
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
    </div>
  );
}

export default Articles;