import Cycho from './Cycho';
import CychoMap from './CychoMap'



function CychoList ({cychos}) {
    if(!cychos) return null;

    const displayCychos = cychos.map(cycho => {

        return (
            <Cycho
            cychos={cychos}
            cycho={cycho}
            />
        )
    })
}

export default CychoList;