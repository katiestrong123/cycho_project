import './css/CychoForm.css';
import ImageUploader from './ImageUploader';


//you should be able to see the make, search for leve 1, level 2, level three or miscellaneous problem and sumbit a photo or video for consultation. 
const CychoFilterForm = ({ onUserInput}) => {
    
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput);
    };

return (

    //can also has a location attribute, west london, east london, south london, central london,

//   <option value="name">Cycho by location </option> with a select of these locations.
<>
     {/* these buttons dont do anything yet, code filter */}
    <div className="filter-buttons">
        <form>
            <button Name="bike-repair" type="button" className="three-buttons"    > B I C Y C L E </button>
            <button Name="electric-repair" type="button" className="three-buttons" >E L E C T R I C</button>
            <button Name="skate-repair" type="button" className="three-buttons"  > S K A T E S </button>
        </form>
    </div>

    {/* Need to seprate form. Search bar only on the cychos page. The button sleect on home page */}
        <div className="cycho-filter-section">
            <div className="cycho-filter">
                <span className="cycho-filer-title">Search cycho... </span>
                    <input placeholder="Enter text..." 
                        onChange={handleFilterInput} 
                        type="text" 
                        id="cycho-input"/>
                </div>
            </div>

            <ImageUploader />
    </>
    )

};

export default CychoFilterForm;