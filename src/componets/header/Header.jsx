import '../../css/Header.css'

function Header() {
    return(
        <>
        <header className="header ">
            <h1 className='Logo'>
                
            </h1>
            <nav className="navigator ">
                <ul className="contain-list ">
                    <li className="hy-list">
                        <a href="#" className="hyperlink-hdnav">Home</a>
                    </li>
                    <li className="hy-list">
                        <a href="#" className="hyperlink-hdnav">Skills</a>
                    </li>
                    <li className="hy-list">
                        <a href="#" className="hyperlink-hdnav">Projects</a>
                    </li>
                    <li className="hy-list">
                        <a href="#" className="hyperlink-hdnav">Services</a>
                    </li>
                    <li className="hy-list">
                        <a href="#" className="hyperlink-hdnav">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>

    )
};

export default Header