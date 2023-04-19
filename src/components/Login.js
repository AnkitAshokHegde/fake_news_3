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

function Login() {
  return (
    // <div>
    //   <h1>Hi</h1> 
    //  </div> 


    // <>
    //   <div class="container-lg d-flex">
    //     <div class="row m-xl-4" data-aos="flip-right" data-aos-duration="1100">
    //       <div class="col rounded-4 mx-lg-1 my-2 p-4" id="login-content">
    //         <h4 class="align-content-center text-white">Reviewer login</h4>
    //         <small class="align-content-center text-white">New here ? <a class="nav-link"
    //           href="register.html.html">Register</a> </small>
    //       </div>
    //     </div>
    //     <div class="row m-xl-4" data-aos="flip-left" data-aos-duration="1100">
    //       <div class="col rounded-4 mx-lg-1 my-2 p-4" id="login-content">
    //         <h4 class="align-content-center text-white">Publication login</h4>

    //         <div class="container p-3 m-lg-0">

    //           <form>
    //             <div class="form-group">
    //               <label for="exampleInputEmail1" class="text-white">Email address</label>
    //               <input type="email" class="form-control" id="exampleInputEmail1"
    //                 aria-describedby="emailHelp" placeholder="Enter email">
    //                 <small id="emailHelp" class="form-text text-muted text-white-50">We'll never share your email with
    //                   anyone else.</small>
    //             </div>
    //             <div class="form-group">
    //               <label for="exampleInputPassword1" class="text-white">Password</label>
    //               <input type="password" class="form-control" id="exampleInputPassword1"
    //                 placeholder="Password">
    //             </div>
    //             <div class="form-group form-check">
    //               <input type="checkbox" class="form-check-input" id="exampleCheck1">
    //                 <label class="form-check-label text-white" for="exampleCheck1">Check me out</label>
    //             </div>
    //             <button type="submit" class="btn btn-primary align-bottom">Submit</button>
    //           </form>
    //         </div>

    //         <small class="align-content-center text-white">New here ? <a class="nav-link"
    //           href="register.html">Register</a> </small>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className='App-body w-100 text-white m-3 p-3' style={{ height: '100vh' }}>

        <Container fluid expand="lg">          
            {/* News Content */}
            <Col xs lg="10" >
              <Row>
                <Col xs ys lg="0" className='lg m-0 p-3' bg="white">

                  <Form>
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

                </Col>
                <Col bg="light">
                  <Container>
                    <Image src={ad} rounded className='mt-3 ml-3' style={{ width: '22vh' }} />
                  </Container>

                </Col>
              </Row>
            </Col>
          

        </Container>
      </div>

    </>

  )
}

export default Login;
