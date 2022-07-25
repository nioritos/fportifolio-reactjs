import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import gmail from '../../assets/svg/gmail.svg';
import telegram from '../../assets/svg/telegram.svg';
import '../../css/About.css'


function About() {
    return (
        <div id="about-me">
            <div className="text-about">
                <h2 className='title-about'>Sobre mim</h2>
                <p className='description-about'>Aoooba, sou o Junior, porém mais conhecido nior, tenho 13 anos e sou Desenvolvedor Front-End JS, desenvolvo a mais de 8 meses e sou apaixonado por programação em geral!</p>
            </div>
            <div className="socials-about">
                <ul>
                    <li>
                        <a href="">
                            <img src={github} alt="" />
                        </a>
                        <h3>Github</h3>
                        <p>nioritos</p>
                    </li>
                    <li>
                        <a href="">
                            <img src={linkedin} alt="" />
                        </a>
                        <h3>LinkedIN</h3>
                        <p>Junior Guimarães</p>
                    </li>
                    <li>
                        <a href="">
                            <img src={linkedin} alt="" />
                        </a>
                        <h3>Instagram</h3>
                        <p>@nioritos</p>
                    </li>
                    <li>
                        <a href="">
                            <img src={gmail} alt="" />
                        </a>
                        <h3>Email</h3>
                        <p>contatonioritos@hotmail.com</p>
                    </li>
                    <li>
                        <a href="">
                            <img src={telegram} alt="" />
                        </a>
                        <h3>Telegram</h3>
                        <p>t.me/nioritos</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About