import {useState, useEffect} from 'react';
import CychosList from '../components/CychosList';
import Cycho from '../components/Cycho';
import {getCychos} from './CychosService';
import CychoMap from '../components/CychoMap';
import CychoFilterForm from '../components/CychoFilterForm';
import ImageUploader from '../components/ImageUploader';
import Footer from '../components/Footer';


function CychosContainer () {
    const[cychos, setCychos] = useState([]);
    const[filteredCychos, setFilteredCychos] = useState([]);
    const[locatedCychos, setLocatedCychos] = useState([]);
    const[cychoSelector, setCychoSelector] = useState("");
    useEffect(() => {
        getCychos()
        .then((data) => {
            console.log(data)
            setCychos(data)
            setFilteredCychos(data)
            setLocatedCychos(data)
        })
    }, [])




    const handleUserFilter = (userInput) => {
        const someCychos = cychos.filter((currentCycho) => {
            if (cychoSelector ==="name") {
                if (currentCycho.hasOwnProperty("year")) {
                    return currentCycho[cychoSelector].toString().toUppoerCase().includes(userInput.toUppoerCase());
                }
            } else if (cychoSelector === "") {
                    return currentCycho;
                } else {
                    return currentCycho[cychoSelector].toUppoerCase().includes(userInput.toUppoerCase());
                };
            
        });
        setFilteredCychos(someCychos);
    };

    const handleCychoSelector = (userInput) => {
        setCychoSelector(userInput);
    };

    const handleLocationSelector = (userInput) => {
        const foundCychos = cychos.filter((currentCycho) => {
            if (locatedCychos ==="location") {
                if (currentCycho.hasOwnProperty("location")) {
                    return currentCycho
                }
            }
        })
        setLocatedCychos(foundCychos)
    }

    return (
        <>
            <CychosList cychos={cychos} 
            handleUserFilter={handleUserFilter}
            handleCychoSelector= {handleCychoSelector}
            handleLocationSelector = {handleLocationSelector}
            murals={filteredCychos}
            murals={locatedCychos}
            />
            <Footer/>            
        </>
    )
}

export default CychosContainer;