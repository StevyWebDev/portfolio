import React from 'react';
import bootstrap from '../images/bootstrap.png';
import css from '../images/css.png';
import gatsby from '../images/gatsby.png';
import html from '../images/html.png';
import illustrator from '../images/illustrator.png';
import js from '../images/js.png';
import mysql from '../images/mysql.png';
import photoshop from '../images/photoshop.png';
import php from '../images/php.png';
import plus from '../images/plus.png';
import sass from '../images/sass.png';
import symfony from '../images/symfony.png';

const Skills = () => {
    return (
        <div id="competences">
            <div>
                <img src={bootstrap} alt="bootstrap"/>
            </div>
            <div>
                <img src={css} alt="css"/>
            </div>
            <div>
                <img src={gatsby} alt="gatsby"/>
            </div>
            <div>
                <img src={html} alt="html"/>
            </div>
            <div>
                <img src={illustrator} alt="illustrator"/>
            </div>
            <div>
                <img src={js} alt="js"/>
            </div>
            <div>
                <img src={mysql} alt="mysql"/>
            </div>
            <div>
                <img src={photoshop} alt="photoshop"/>
            </div>
            <div>
                <img src={php} alt="php"/>
            </div>
            <div>
                <img src={plus} alt="plus"/>
            </div>
            <div>
                <img src={sass} alt="sass"/>
            </div>
            <div>
                <img src={symfony} alt="symfony"/>
            </div>
        </div>
    )
}

export default Skills;