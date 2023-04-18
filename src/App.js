import ad from './images/ad-1.png';
import './App.css';
import './components/NavCustom.js';

import Container from 'react-bootstrap/Container';
import NavCustom from './components/NavCustom.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';


function AdContent() {
  return (
    <Col bg="light">
      <Container>
        {/* <img src={ad}></img> */}
        <Image src={ad} rounded className='w-100 mt-3 ml-3' />
      </Container>

    </Col>
  );
}

function ContentCustom() {
  return (
    <div className='lg m-0 p-3' bg="white">     
      <Card className='text-dark text-center' style={{height:"h-100"}}>
      <Card.Title>
         <Container className='d-flex justify-content-between p-3'>
         <h5>News Title</h5>
         <Badge bg="warning">Blank</Badge>
         </Container>
         </Card.Title>
        <Card.Body>This is crazy man</Card.Body>
       <a href='#' className='text-dark'><p>Read more</p></a>
      </Card>
    </div>
  );
}

// function CardsCustomoriginal() {
//   return (
//     <div className='lg m-0 p-3'>
//       <Card style={{ width: '25rem' }} className="rounded">
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title className="text-dark d-flex justify-content-between">
//             <h5>Card Title </h5>
//             <Badge bg="warning">Blank</Badge>
//           </Card.Title>
//           <Card.Text className="text-dark">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

function HomeContent() {
  return (
    <div className='m-3 p-3'>

      <Container fluid expand="lg">
        <Row>
          <Col xs lg="10" >
            <Row>
              <Col fluid><ContentCustom /></Col>
              <Col xs lg="7"><ContentCustom/></Col>
            </Row>
            <Row>
              <Col xs lg="7"><ContentCustom /></Col>
              <Col><ContentCustom /></Col>
            </Row>
          </Col>
          <AdContent />
        </Row>
      </Container>
    </div >
  );
}


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <NavCustom />
      </header>
      <body className='App-body w-100 text-white'  style={{height:'100vh'}}>
        <HomeContent />
      </body>
    </div>
  );
}

export default App;