import {useState, useEffect} from 'react';
import CychosList from '../components/CychosList'
import Cycho from '../components/Cycho'
import {getCychos} from './CychosService'


function CychosContainer () {
    const[cychos, setCychos] = useState([]);
    useState("");
    useEffect(() => {
        getCychos()
        .then((data) => {
            console.log(data)
            setCychos(data)
        })
    }, [])

    return (
        <>
            <CychosList cychos={cychos}/>
        </>
    )
}

export default CychosContainer;