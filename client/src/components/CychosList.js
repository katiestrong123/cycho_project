import Cycho from './Cycho';
import CychoMap from './CychoMap';


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
                {displayCychos}
                <div className ="cycho-map">
                    <CychoMap
                    cychos={cychos}
                    // updatedCycho={updatedCycho}
                    />

                </div>
            </>
        )
}


export default CychosList;