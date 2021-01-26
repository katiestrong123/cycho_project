import Cycho from "./Cycho";

function PopupInfo ({ popupInfo, updatePopupInfo}) {
// FIX THIS FILE
// FIX THIS FILE
// FIX THIS FILE
// FIX THIS FILE
// FIX THIS FILE
// FIX THIS FILE
// FIX THIS FILE

    return (
        <>
        <div className='popup-listing'>
            <img className='popup-photo' src={popupInfo.photoUrl} alt={popupInfo.name}/>
            <h3>{popupInfo.name}</h3>
            <p>{popupInfo.location}</p>
            <hr></hr>
            <p>Fixes: {popupInfo.skills}</p>
        </div>
        </>
    )
}

export default PopupInfo;
