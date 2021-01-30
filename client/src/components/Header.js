import './css/Header.css'; 

function Header () {
    return (
        <>
        <div className="header-section">
            <img className="logo" src="./static/cychoLogo.png" />
            <h3 className="not-crazy">We're not crazy, we're cycho.</h3>
            <p className="slogan" >Cycle repairs made easy. Find a cycho, book a slot. </p>
        </div>
        </>
    );
};

export default Header; 