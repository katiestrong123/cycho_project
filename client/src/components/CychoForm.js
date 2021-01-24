// This will be the form to search for a cycho


//you should be able to see the make, search for leve 1, level 2, level three or miscellaneous problem and sumbit a photo or video for consultation. 
const CychoForm = ({ onUserInput, onUserSelect}) => {
    
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput);
};

    const handleFilterSelect = (event) => {
        const userInput = event.target.value;
        onUserSelect(userInput);
};

return (
    //here could be 3 images, bicycle, motorbike, scooter = if bicycle is selected, list all cychos with bicycles specialiaty etc. 

    // with upload form can upload phot, video of systems (cychosymptimatic (cycho pun in placeholder text and explaination elsewhere below))

    //can also has a location attribute, west london, east london, south london, central london,
   // <option value="name">Cycho by location </option> with a select of these locations.
    <div className="cycho-filter">
        <span className="cycho-filer-title">Search cycho... </span>
        <select onChange={handleFilterSelect}
                name="cycho-search-type"
                id="cycho-filter-select">
            <option value="name">Cycho by name </option>
            <option value="instagram">Cycho by instagram </option>
            </select>
            <input placeholder="Enter text..." 
                   onChange={handleFilterInput} 
                   type="text" 
                   id="cycho-input"/>
    </div>
)

};

export default CychoForm;