import React from "react";
import "../../index.css"
import logoSheCodes from "../images/sheCodes.png"

const Header = () =>{
    return (     
        <section>
            <header className="header"> 
                <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
                    <img className="logo" src={logoSheCodes} alt="SheCodes Logo"/>
                </a>
            </header>
        </section>
    )
}

export default Header;