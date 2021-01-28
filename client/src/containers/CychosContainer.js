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
            <CychosList
            handleUserFilter={handleUserFilter}          
            cychos={filteredCychos}
            />
            <Footer/>            
        </>
    )
}

export default CychosContainer;