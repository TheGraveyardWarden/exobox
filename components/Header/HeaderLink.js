import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({name, to, className, onClick, children}) {
    return <div name={name} onClick={onClick} className={`header_link ${className}`} >
        <Link to={to}>{children}</Link>
    </div>
}

export default HeaderLink;