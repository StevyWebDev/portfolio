import React, {useEffect} from 'react';
import Scrambler from 'scrambling-text';

const Home = () => {

    const TEXTS = [
        'StevyDevWeb',
        'Steven Vergueiro',
        'Développeur Web',
        'Concepteur d\'application'
    ];
    const scrambler = new Scrambler();
    const handleScramble = (text) => {
        document.querySelector('#text').innerHTML = `<h1>${text}</h1>`;
    }
    let i = 0;
    const printText = () => {
        scrambler.scramble(TEXTS[i % TEXTS.length], handleScramble);
        setTimeout(printText, 3000);
        i++;
    }
    useEffect(() => {
        printText();
    }, [printText])

    return (
        <section id="home">
            <div className="filter" />
            <div id="text" />
        </section>
    )
}

export default Home;