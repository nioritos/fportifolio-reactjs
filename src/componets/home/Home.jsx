import '../../css/Home.css';
import ImageHome from './image_home.svg';

function Home() {
    return(
        <>
        <section className="home">
            <div className="text-home">
                <h1 className="title-home">Olá, eu sou o Junior Guimarães, <br /> ou pode me chamar de  ,<strong> nioritos</strong>.</h1>
                <p className="description-home">Developer Web Jr. TS,JS,JSX</p>
                <div className="hyperlink-container">
                    <a href="" className="donwload-cv">
                        <h3>Download CV</h3>
                    </a>
                    <a href="" className="contact-me">
                        <h3>Entrar em contato</h3>
                    </a>
                </div>
            </div>
            <div className="homecontainer-image">
                <img src={ImageHome} className="image-home" alt="" />
            </div>
        </section>
        </>

    )
}

export default Home