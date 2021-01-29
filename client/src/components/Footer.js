import './Footer.css'

function Footer () {




//  input email bar, maybe find a way to put into data base. 

//email, subscribe button.

//buttons for different page route 

    return (
    
            <div className="footer">
                <div className="footer-content">
                   
                <img className="footer-logo" src="./static/cychoLogo.png" />
                <div className="socials">
                    <a href="#" >
                            <img className="social" id="youtube" type="image" src="./static/youtube.png" />
                    </a>
                    <a href="#" >
                            <img className="social" id="inst" type="image" src="./static/instagram.png" />
                    </a>
                    <a href="#" >
                            <img className="social" id="twitter" type="image" src="./static/twitter.png" />
                    </a>
                    
{/*                  
                   
                    <img height="30px"className="social" id="youtube" src="./static/youtube.png" />
                    <img height="30px" className="social" id="inst" src="./static/instagram.png"/>
                    <img height="30px" className="social"id="twitter" src="./static/twitter.png" /> */}

                </div>
                <div className="newsletter-signup">
                    <section>
                        <input className="footer-email" type="email" name="email" placeholder="NAME@EMAIL.COM"></input>
                        
                    </section>

                    <input className="footer-subscribe" type="submit" value="SUBSCRIBE"></input>
                </div>
                <h4>CYCHOS</h4>
                <h4>EAR FOOD</h4>
                <h4>CONTACT</h4>
                <h4>07758 135 514</h4>
                <h4>ABOUT</h4>

                <footer>&copy; Copyright 2021 Cycho London</footer>

                </div>
            </div>
    )
}

export default Footer;