import './Cycho.css';

const Cycho = ({cycho}) => {
  
    //this is where updated rating will do
    //this is where updated rating will do
    //this is where updated rating will do

    
            return (
                <>
                    <div className="cycho-listing">
                        <div className="cycho-photo-section">
                            <img className="cycho-photo" src={cycho.photoUrl} alt={cycho.name} />
                        </div>
                        <div className="cycho-text">
                            <h4 className="cycho-title">{cycho.name}, {cycho.age}</h4>
                            <h5>Security number: {cycho.cychoSecurityCode}</h5>
                            <h5>{cycho.instagram}</h5>
                            <h5>Based in {cycho.location}</h5>
                            <p className="cycho-bio">{cycho.bio}</p>
                            <p>Repairs: {cycho.skills}</p>

                        </div>
                    </div>
                </>
            )
}



export default Cycho;