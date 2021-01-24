import Cycho from './Cycho';


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
            </>
        )
}


export default CychosList;