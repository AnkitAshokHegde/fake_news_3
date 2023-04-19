// import ad from './images/ad-1.png';
// import './App.css';

// import Container from 'react-bootstrap/Container';
// import NavCustom from './components/NavCustom';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Stack from 'react-bootstrap/Stack';
// import Badge from 'react-bootstrap/Badge';

// import AOS from 'aos';
// import 'aos/dist/aos.css';



// function AdContent() {
//   return (
//     <Col bg="light">
//       <Container>
//         <Image src={ad} rounded className='mt-3 ml-3' style={{width:'22vh'}} />
//       </Container>

//     </Col>
//   );
// }

// function ContentCustom() {
//   return (
//     <div className='lg m-0 p-3' bg="white">     
//       <Card className='text-dark text-center' style={{height:"20rem"}}>
//       <Card.Title>
//          <Container className='d-flex justify-content-between p-3'>
//          <h5>News Title</h5>
//          <Badge bg="warning">Blank</Badge>
//          </Container>
//          </Card.Title>
//         <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Card.Body>
//        <a href='#' className='text-dark'><p>Read more</p></a>
//       </Card>
//     </div>
//   );
// }

// function HomeContent() {
//   return (
//     <div className='m-3 p-3'>

//       <Container fluid expand="lg">
//         <Row>
//           <Col xs lg="10" >
//             <Row>
//               <Col xs lg="7" ><ContentCustom /></Col>
//               <Col><ContentCustom /></Col>
//             </Row>
//             <Row>
//               <Col fluid><ContentCustom /></Col>
//               <Col xs lg="7"><ContentCustom/></Col>
//             </Row>
//           </Col>
//           <AdContent />
//         </Row>
//       </Container>
//     </div >
//   );
// }

// function App(){
//   return (    
//     <div className="App">
//       <header className="App-header">
//         <NavCustom />
//       </header>
//       <body className='App-body w-100 text-white'  style={{height:'100vh'}}>
//         <HomeContent />
//       </body>
//     </div>
//   );

// }

// export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavCustom from './components/NavCustom';
import Home from './components/Home';
import Articles from './components/Articles';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavCustom />
        <Routes>
          {/* <Route exact path="/" coponent={Home}/> */}

          {/* Actually the 'component' was not working... so I have used 'element' instead of that. */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/articles" element={<Articles/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/about-us" element={<About/>} />
          <Route exact path="/contact-us" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;