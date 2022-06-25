import React from "react";
import '../styles/navbar.css';

function Navbar(props) {

    const { currentScore, bestScore } = props;

    return (
        <nav>
            <div className="nav-header">
                <h1>Football Teams Memory Card Game</h1>
                <p>Get Points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className="scores">
                <p>Score: {currentScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </nav>
    );
}

export default Navbar;