import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Route, Routes} from "react-router-dom";
import "./style/LandingPage.css";

import NavigationBar from './components/NavigationBar';
import Widemenu from './components/Widemenu';

import {Home, Feeds, Events, Promo, Community, News, Foryou} from "./components/pages";

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4zZZJw9sqCZozpnX6PBQU0bmLJ4wutwk",
  authDomain: "kabarkabarin-a23ba.firebaseapp.com",
  projectId: "kabarkabarin-a23ba",
  storageBucket: "kabarkabarin-a23ba.appspot.com",
  messagingSenderId: "227977176811",
  appId: "1:227977176811:web:225a3b3129d5ecb47140ae",
  measurementId: "G-3F04ZG7X2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    document.head.append(script);
    //script.src = "https://cse.google.com/cse.js?cx=849d82ea825cf40b7";
    }, []);


  return (
    <div className='App'>
        <Container>
          <Row><Col><NavigationBar/></Col></Row>
          <Row>  
            <Col>
              <Widemenu/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/feeds' element={<Feeds/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/promo' element={<Promo/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/foryou' element={<Foryou/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
        
    </div>
  )
}

export default App;
