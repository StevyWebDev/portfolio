import React, {useEffect, useState} from 'react';
import profil from '../images/profile.jpg';

const Me = () => {
    const [classRight, setClassRight] = useState('SectionRight');

    const scrolledChangeClass = () => {
        const profile = document.querySelector('#profile');
        const home = document.querySelector('#home');

        const windowsHeight = document.body.clientHeight;
        const currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const operation = (profile.offsetHeight / 3) + home.offsetHeight;

        currentScroll + windowsHeight >= operation && setClassRight('SectionRightCenter');
    }

    useEffect(() => {
        if(window && classRight === 'SectionRight')
            window.addEventListener("scroll", scrolledChangeClass, false);
    })

        const getAge = () => {
        const date = new Date(1994, 3, 9);
        const now = new Date(Date.now());

        return Math.abs(now.getFullYear() - date.getFullYear());
    }

    return (
        <section id="profile">
            <div>
                <img src={profil} alt="Vergueiro Steven"/>
            </div>
            <div className={classRight} itemScope itemType="http://schema.org/LocalBusiness">
                <p>Nom : <span itemProp="name">Vergueiro</span></p>
                <p>Prénom : <span itemProp="name">Steven</span></p>
                <p>Age : <span>{getAge()} ans</span></p>
                <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress" />
                <p>Adresse : <span itemProp="address">2 rue Chanoine Bonnard</span></p>
                <p>Code postal : <span itemProp="postalCode">21470</span></p>
                <p>Ville : <span itemProp="addressLocality">Brazey en Plaine</span></p>
                <p>Téléphone : <span itemProp="telephone">07.88.10.46.22</span></p>
                <p>Email : <span itemProp="email">vergueiro.steven@gmail.com</span></p>
            </div>
        </section>
    )
}

export default Me;