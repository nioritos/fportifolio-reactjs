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
                        <a href="#home" className="hyperlink-hdnav">Home</a>
                    </li>
                    <li className="hy-list">
                        <a href="#about-me" className="hyperlink-hdnav">About me</a>
                    </li>
                    <li className="hy-list">
                        <a href="#projects" className="hyperlink-hdnav">Projects</a>
                    </li>
                    <li className="hy-list">
                        <a href="#services" className="hyperlink-hdnav">Services</a>
                    </li>
                    <li className="hy-list">
                        <a href="#skills" className="hyperlink-hdnav">Minha Skills</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>

    )
};

export default Header