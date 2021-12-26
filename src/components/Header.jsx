import React from 'react';

const Header = () => {

    const onClickButtonBurger = () => {
        const button = document.querySelector(".button__burger");
        const navApp = document.querySelector(".nav__app");

        if(button.classList.contains('active')) {
            button.classList.remove('active');
            navApp.classList.add('no-active');

        } else {
            button.classList.add('active');
            navApp.classList.remove('no-active');
        }
    }

    const itemActive = (item) => {
        document.querySelector("#nav__home .link").classList.remove("active");
        document.querySelector("#nav__presentation .link").classList.remove("active");
        document.querySelector("#nav__production .link").classList.remove("active");
        document.querySelector("#nav__skill .link").classList.remove("active");
        document.querySelector("#nav__contact .link").classList.remove("active");

        document.querySelector(`${item} .link`).classList.add("active");
    }

    return (
        <header id='header' className="header__app">
            <div
                className="button__burger"
                onClick={onClickButtonBurger}
                onKeyDown={onClickButtonBurger}
                tabIndex={0}
                role="button"
            >
                <div className="hamburger" />
            </div>
            <nav className="nav__app no-active">
                <ul className="block__items">
                    <li id="nav__home" className="items item__app"><a className="link active" href="#accueil" onClick={() => {itemActive('#nav__home')}}>Accueil</a></li>
                    <li id="nav__presentation" className="items item__app"><a className="link" href="#presentation" onClick={() => {itemActive('#nav__presentation')}}>Présentation</a></li>
                    <li id="nav__production" className="items item__app"><a className="link" href="#realisation" onClick={() => {itemActive('#nav__production')}}>Réalisation</a></li>
                    <li id="nav__skill" className="items item__app"><a className="link" href="#competence" onClick={() => {itemActive('#nav__skill')}}>Compétences</a></li>
                    <li id="nav__contact" className="items item__app"><a className="link" href="#contact" onClick={() => {itemActive('#nav__contact')}}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;