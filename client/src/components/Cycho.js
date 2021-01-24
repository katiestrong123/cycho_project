
const Cycho = ({cycho}) => {
  
    //this is where updated rating will do
    //this is where updated rating will do
    //this is where updated rating will do

    
            return (
                <>
                    <div className="cycho-photo-section">
                        <img className="cycho-photo" src={cycho.photoUrl} alt={cycho.name} />
                    </div>
                    <h5>{cycho.name}, {cycho.age}</h5>
                    <h5>Security number: {cycho.cychoSecurityCode}</h5>
                    <h5>{cycho.instagram}</h5>
                    <h5>Base shop: {cycho.baseLocation}</h5>
                    <p>{cycho.bio}</p>
                </>
            )
}



export default Cycho;