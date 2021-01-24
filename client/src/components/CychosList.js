import Cycho from './Cycho';
import CychoMap from './CychoMap';
import CychoForm from './CychoForm';
import Header from '../components/Header';

function CychosList({cychos}){

    const displayCychos = cychos.map((cycho) => {
        return (
            <Cycho
            cychos={cychos}
            cycho={cycho}
            />) 
    })

        return (
            <>
                <div className ="cycho-map">
                    <CychoMap
                    cychos={cychos}
                    // updatedCycho={updatedCycho}
                    />
                </div>
                <Header/>
                <CychoForm/>
                {displayCychos}
            </>
        )
}


export default CychosList;