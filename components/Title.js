import React from "react";

function Title({name, children, className}) {
    return <div name={name} className={`title ${className}`}>
        {children}
    </div>
}

export default Title;