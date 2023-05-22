import React from "react";
import {logo} from '../assets/media'

function Logo({className}) {
    return <img src={logo} alt='logo' className={`logo ${className}`} />
}

export default Logo;