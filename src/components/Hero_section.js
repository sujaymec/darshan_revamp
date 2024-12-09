import {React, useState}from "react";
import { Button } from "reactstrap";
import bsslogo from '../assets/img/layer1.svg'
import { Link } from "react-router-dom";


function HeroSection () {
    const [count, setCount] = useState(0)
    console.log('this is the count', count)
    return (
        <div className="hero-section">
            <h1>&nbsp;Darshan</h1>
            <div className="hero-text">
                <img src={bsslogo} alt="sth" className="bss-logo" />
                <h3> Master Franchisee BSS Cultural Mission National Development Agency</h3>
            </div>
            <div className="hero-buttons">
                <Link to="/about">
                    <Button color="info" className="btn-downloads" onClick={() => setCount(count+1)}>
                        Downloads
                        <i className="material-icons">download</i>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;