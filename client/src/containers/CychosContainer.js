import {useState, useEffect} from 'react';
import CychosList from '../components/CychosList';
import Cycho from '../components/Cycho';
import {getCychos} from './CychosService';
import CychoMap from '../components/CychoMap';
import CychoForm from '../components/CychoForm';
import ImageUploader from '../components/ImageUploader';


function CychosContainer () {
    const[cychos, setCychos] = useState([]);
    const[filtereCychos, setFilteredCychos] = useState([]);
    const[cychoSelector, setCychoSelector] = useState("");
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
            if (cychoSelector ==='name') {
                if (currentCycho.hasOwnProperty('year')) {
                    return currentCycho[cychoSelector].toString().toUppoerCase().includes(userInput.toUppoerCase());
                }
                else if (cychoSelector === "") {
                    return currentCycho;
                } else {
                    return currentCycho[cychoSelector].toUppoerCase().includes(userInput.toUppoerCase());
                };
            }
        });
        setFilteredCychos(someCychos);
    };

    // const handleCychoSelector = 


    return (
        <>
            <CychosList cychos={cychos} 
           
            //handleCychoSelector= {handleCychoSelector}
            />
             <ImageUploader />
        </>
    )
}

export default CychosContainer;