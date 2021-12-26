import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Me from './components/Me';
import Formation from './components/Formation';
import Skills from './components/Skills';
import {useEffect, useState} from 'react';

//import Footer from "./components/Footer";

function App() {

    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <Me/>
                <Formation />
                <Skills />
            </main>
        </div>
    );
}

export default App;
