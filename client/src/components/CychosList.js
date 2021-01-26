import Cycho from './Cycho';
import CychoMap from './CychoMap';
import CychoForm from './CychoFilterForm';
import Header from '../components/Header';
import CychoFilterForm from '../components/CychoFilterForm';

function CychosList({cychos, handleCychoSelector, handleUserFilter, handleLocationSelector}){

    const displayCychos = cychos.map((cycho) => {
        return (
            <Cycho
            cychos={cychos}
            cycho={cycho}
            />) 
    })

    const toggleDisplay = () => {
        if (cychos.length === 0) {
            console.log("cychos", cychos)
            return <p>No cychos avaialable at this time. Send a request and we'll get someone on it.</p>
        }
    };
        return (
                <>
                <div className ="cycho-map">
                    <CychoMap
                    cychos={cychos}
                    // updatedCycho={updatedCycho}
                    />
                </div>
                <Header/>
                {toggleDisplay()}
                <div>
                    <CychoFilterForm onUserInput = {handleUserFilter}
                                     onUserSelect = {handleCychoSelector}
                                     onLocationSelect = {handleLocationSelector}
                        />
                </div>
                <div className="display-cychos">
                    {displayCychos}
                </div>
            </>
        )
}


export default CychosList;