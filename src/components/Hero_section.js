import React from "react";
import { Button } from "reactstrap";

function HeroSection () {
    return (
        <div className="hero-section">
            <h1>Darshan</h1>
            <div className="hero-text">
                <h3>
                    {/* <span>Educational and Charitable Organization</span><br /> */}
                    Master Franchisee BSS Cultural Mission National Development Agency
                </h3>
                <img src="https://i.imgur.com/NTfitFP.png" alt="sth" />
            </div>
            <div className="hero-buttons">
                <Button color="info">Downloads</Button>
                <Button color="danger">Brochure</Button>
            </div>
        </div>
    )
}

export default HeroSection;