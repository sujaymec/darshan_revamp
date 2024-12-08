import {React, useState}from "react";
import { Button } from "reactstrap";
import bsslogo from '../assets/img/layer1.svg'


function HeroSection () {
    const [count, setCount] = useState(0)
    console.log('this is the count', count)
    return (
        <div className="hero-section">
            <h1>&nbsp;Darshan</h1>
            <div className="hero-text">
                <h3>
                    {/* <span>Educational and Charitable Organization</span><br /> */}
                    Master Franchisee BSS Cultural Mission National Development Agency
                </h3>
                <img src={bsslogo} alt="sth" className="bss-logo" />
            </div>
            <div className="hero-buttons">
                <Button color="info" className="btn-downloads" onClick={() => setCount(count+1)}>
                    Downloads
                    <i className="material-icons">download</i>
                </Button>
                {/* <Button color="danger">Brochure</Button> */}
            </div>
        </div>
    )
}

export default HeroSection;