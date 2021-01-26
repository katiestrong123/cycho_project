import './CychoForm.css';
import ImageUploader from './ImageUploader';


//you should be able to see the make, search for leve 1, level 2, level three or miscellaneous problem and sumbit a photo or video for consultation. 
const CychoFilterForm = ({ onUserInput, onUserSelect, onLocationSelect }) => {
    
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput);
    };

    const handleFilterSelect = (event) => {
        const userInput = event.target.value;
        onUserSelect(userInput);
    };

    const handleLocationSelect = (event) => {
        const userInput = event.target.value;
        onLocationSelect(userInput);
    };

return (
  

    //here could be 3 images, bicycle, electric, skate = if bicycle is selected, list all cychos with bicycles specialiaty etc. 

    //can also has a location attribute, west london, east london, south london, central london,

//   <option value="name">Cycho by location </option> with a select of these locations.
<>
     <ImageUploader />
    <div className="picture-butotns">
        <form>
            <input Name="electric-repair" type="image" src="./static/electric-repair.jpeg" height="150px"/>
            <input Name="bike-repair" type="image" src="./static/bike-repair.jpeg" height="150px"/>
            <input Name="skate-repair" type="image" src="./static/skate-repair.jpeg" height="150px"/>
        </form>
    </div>
        <div className="cycho-filter-section">
            <div className="cycho-filter">
                <span className="cycho-filer-title">Search cycho... </span>
                <select onChange={handleFilterSelect}
                        name="cycho-search-type"
                        id="cycho-filter-select">
                    <option value="choose">Choose a filter </option>
                    <option value="name">Cycho by name </option>
                    <option value="instagram">Cycho by instagram </option>
                    </select>
                    <input placeholder="Enter text..." 
                        onChange={handleFilterInput} 
                        type="text" 
                        id="cycho-input"/>
                </div>
            <div className="location-selector">   
                <select onChange={handleLocationSelect}
                        name="location-search-type"
                        id="location-filter-select">
                    <option value="choose">Choose location</option>
                    <option value="cenrtral">Central London</option>
                    <option value="North">North London</option>
                    <option value="East">East London</option>
                    <option value="South">South London</option>
                    <option value="West">West London</option>
                </select>
            </div>
        </div>
    </>
    )

};

export default CychoFilterForm;