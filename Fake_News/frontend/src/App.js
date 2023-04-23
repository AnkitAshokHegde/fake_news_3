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
import AOS from 'aos';
import "aos/dist/aos.css";


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

// // Code snippet for connecting the wallet. 
// import { Web3ReactProvider } from '@web3-react/core'
// import { Web3Provider } from "@ethersproject/providers";

// function getLibrary(provider, connector) {
//   return new Web3Provider(provider);
// }

// const App => () {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <YourAwesomeComponent />
//     </Web3ReactProvider>
//   )
// }