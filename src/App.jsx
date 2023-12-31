import './App.css';
import react from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/koti'
import CardGame from './Components/cardgame/CardGame';
import Breakout from './Components/breakout/breakout';

export default function App(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cardgame">CardGame</Link>
                        </li>
                        <li>
                            <Link to="/breakout">Breakout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cardgame" element={<CardGame />}/>
                <Route path='breakout' element={<Breakout/>}/>
            </Routes>
        </Router>
    );
}

