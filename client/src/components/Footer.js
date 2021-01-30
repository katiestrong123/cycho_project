import './css/Footer.css'

function Footer () {

//make email imput bar return an empty string onClick subscripe button 
//buttons for different page route e.g. about, location, contact etc

    return (
    
            <div className="footer">
                <div className="footer-content">
                    <img className="footer-logo" src="./static/cychoLogo.png" />
                    <div className="socials">
                        <a href="https://www.youtube.com/watch?v=lMbseuQR2G8&ab_channel=FirstWeFeast" target="_blank" >
                                <img className="social" id="youtube" type="image" src="./static/youtube.png" />
                        </a>
                        <a href="https://www.instagram.com/katyxtrastrong/?hl=en" target="_blank">
                                <img className="social" id="inst" type="image" src="./static/instagram.png" />
                        </a>
                        <a href="https://twitter.com/JamesBlunt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" >
                                <img className="social" id="twitter" type="image" src="./static/twitter.png" />
                        </a> 
                    </div>
                    <div className="newsletter-signup">
                        <section>
                            <input className="footer-email" type="email" name="email" placeholder="NAME@EMAIL.COM"></input>
                            
                        </section>

                {/* onClick, value= "" */}


                        <input className="footer-subscribe" type="submit" value="SUBSCRIBE"></input>
                    </div>
                    <div className="footer-links">
                        <h4>CYCHOS</h4>
                        <h4>EAR FOOD</h4>
                        <h4>CONTACT</h4>
                        <h4>07758 135 514</h4>
                        <h4>ABOUT</h4>
                    </div>

                    <footer>&copy; Copyright 2021 Cycho London</footer>

                </div>
            </div>
    )
}

export default Footer;