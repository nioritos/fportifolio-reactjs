import '../../css/Skills.css';
import Figma from '../../assets/svg/figma.svg';
import HTML from '../../assets/svg/html.svg';
import CSS from '../../assets/svg/css3.svg';
import TS from '../../assets/svg/typescript.svg';
import JSX from '../../assets/svg/reactjs.svg';
import JS from '../../assets/svg/javascript.svg';


function showAboutSkill(message) {

}

function Skills() {
    return(
        <>
            <section id="skills">
                <div className="text-skills">
                    <h1 className='title-skills'>Minhas Skills
                    </h1>
                </div>

                <div className="skills-area">
                    <h3 className="show-hover">
                        <strong>*passe o mouse para ver sobre*</strong>
                    </h3>
                    <ul className="cards-skills">
                        <li>
                            <img src={HTML} alt="ícone de skill em HTML" />
                        </li>
                        <li>
                            <img src={CSS} alt="ícone de skill em CSS" />
                        </li>
                        <li>
                            <img src={JS} alt="ícone de skill em Javascript" />
                        </li>
                        <li>
                            <img src={TS} alt="ícone de skill em Typescript" />
                        </li>
                        <li>
                            <img src={JSX} alt="ícone de skill em ReactJS" />
                        </li>
                        <li>
                            <img src={Figma} alt="ícone de skill em Figma" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Skills