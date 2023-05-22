import React from "react";
import { google_logo } from "../../assets/media";

function GoogleBtn({name, className, onClick}) {
    return <div name={name} onClick={onClick} className={`google_btn ${className}`}>
        <img alt="google_logo" className="google_logo" src={google_logo} />
        <p>ورود با حساب کاربری گوگل</p>
    </div>
}

export default GoogleBtn;