import '../css/NavBar.css'

const NavBar = () => {


    return (
        <>
            <div className="nav-bar">
                <ul className="nav-list">
                    <l>
                        <a className="home-nav-items" href="/">HOME</a>
                    </l>
                    <l>
                        <a className="nav-items" href="about">ABOUT</a>
                    </l>
                    <l>
                        <a className="nav-items" href="location">LOCATION</a>
                    </l>
                    <l>
                        <a className="nav-items" href="cychos">CYCHOS</a>
                    </l>
                </ul>
            </div>
        </>
    )
}

export default NavBar