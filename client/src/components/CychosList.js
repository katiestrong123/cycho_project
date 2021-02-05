import Cycho from './Cycho';
import CychoFilterForm from '../components/CychoFilterForm';
import {getCychos} from '../containers/CychosService';
import { useState, useEffect } from 'react';


function CychosList({cychos, handleUserFilter}){
    // if(!cychos) return null;

    
    const displayCychos = cychos.map(cycho => {
        return(
            <Cycho
            cychos={cychos}
            cycho={cycho}
            />
        )
    })
    
    const toggleDisplay = () => {
        if (cychos.length === 0) {
            console.log("cychos", cychos)
            return <p>No cychos avaialable at this time. Send a request and we'll get someone on it.</p>
        }
    };
    
    return (
        <>
            {toggleDisplay()}
            <div>
                <CychoFilterForm onUserInput = {handleUserFilter}/>
            </div>
            <div className="display-cychos">
                {displayCychos}
            </div>
        </>
    )
}

export default CychosList;