import {useState, useEffect} from 'react';
import {getCychos} from './containers/CychosService';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/Home';
import AboutCycho from './components/pages/AboutCycho';
import LocationCycho from './components/pages/LocationCycho';
import CychosPage from './components/pages/CychosPage';
import Footer from './components/Footer';
import NavBar from './components/pages/NavBar';
import Header from './components/Header';
import CychoMap from'./components/CychoMap';
import './App.css';
import './components/css/CychoMap.css'

function App() {
  
    const[cychos, setCychos] = useState([]);
    const[filteredCychos, setFilteredCychos] = useState([]);
    useEffect(() => {
        getCychos()
        .then((data) => {
            console.log(data)
            setCychos(data)
            setFilteredCychos(data)
        })
    }, [])
  
    const handleUserFilter = (userInput) => {
        const someCychos = cychos.filter((currentCycho) => {
            return currentCycho.name.toUpperCase().includes(userInput.toUpperCase());
        })
        setFilteredCychos(someCychos);
    }

  return (
    <>

      <Router>
      <NavBar />
      <CychoMap
      cychos={cychos} className="map-container"/>
      <Header/>


        {/* this is where header and map should be  */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutCycho} />
        <Route path="/location" component={LocationCycho} />
        <Route path="/cychos" component={CychosPage} />
        <Footer />

        
      </Router>
      </>

  );
}


export default App;