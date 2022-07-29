import '../../css/Skills.css';
import Figma from '../../assets/svg/figma.svg';
import HTML from '../../assets/svg/html.svg';
import CSS from '../../assets/svg/css3.svg';
import TS from '../../assets/svg/typescript.svg';
import JSX from '../../assets/svg/reactjs.svg';
import JS from '../../assets/svg/javascript.svg';
import React, { useState } from 'react';


function Skills() {
    let [msgSk, setMsgSk] = useState('');

    return(
        <>
            <section id="skills">
                <div className="text-skills">
                    <h1 className='title-skills'>Minhas Skills
                    </h1>
                </div>

                <div className="skills-area">
                    <h3 className="show-hover">
                        <strong>{msgSk}</strong>
                    </h3>
                    <ul className="cards-skills">
                        <li onMouseEnter={() => setMsgSk(msgSk = 'Hyper Text Markup Language é uma linguagem de marcação de texto')}>
                            <img src={HTML} alt="ícone de skill em HTML" />
                        </li>
                        <li onMouseEnter={() => setMsgSk(msgSk = 'Cascading Style Sheets é uma linguagem de estilização.')}>
                            <img src={CSS} alt="ícone de skill em CSS" />
                        </li>
                        <li onMouseEnter={() => setMsgSk(msgSk = 'Javascript é uma linguagem de programação com tipagem dinâmica.')}>
                            <img src={JS} alt="ícone de skill em Javascript" />
                        </li>
                        <li onMouseEnter={() => setMsgSk(msgSk = 'Typescript é uma linguagem de programação com tipagem estática.')}>
                            <img src={TS} alt="ícone de skill em Typescript" />
                        </li>
                        <li onMouseEnter={() => setMsgSk(msgSk = 'ReactJS é uma biblioteca Javascript, usada para construir interfaces do usuário (UI).')}>
                            <img src={JSX} alt="ícone de skill em ReactJS" />
                        </li>
                        <li onMouseEnter={() => setMsgSk(msgSk = 'Figma é uma ferramente de design, seja para UX ou UI design.')}>
                            <img src={Figma} alt="ícone de skill em Figma" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Skills