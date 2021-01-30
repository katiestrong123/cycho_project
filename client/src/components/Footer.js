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
                    <div className="footer-nav">
                        <ul>
                            <l>
                                <a
                                className="footer-links"
                                href="location">L  O  C  A  T  I  O  N</a>
                            </l> 
                            <br></br>
                            <br></br>
                            <l>
                                <a
                                className="footer-links"
                                href="cychos">C  Y  C  H  O  S</a>
                            </l>
                            <br></br>
                            <br></br>
                            <l>
                                <a
                                className="footer-links"
                                href="about">A  B  O  U  T </a>
                            </l>
                            <br></br>
                            <br></br>
                            
                        </ul>                
                        <h4>C O N T A C T</h4>
                        <h4>0 7 7 5 8 1 3 5 5 1 4</h4>
                    


                    </div>

                    <footer>&copy; Copyright 2021 Cycho London</footer>

                </div>
            </div>
    )
}

export default Footer;