import './CychoForm.css';
import ImageUploader from './ImageUploader';


//you should be able to see the make, search for leve 1, level 2, level three or miscellaneous problem and sumbit a photo or video for consultation. 
const CychoFilterForm = ({ onUserInput}) => {
    
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput);
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
                    <input placeholder="Enter text..." 
                        onChange={handleFilterInput} 
                        type="text" 
                        id="cycho-input"/>
                </div>
            </div>
    </>
    )

};

export default CychoFilterForm;