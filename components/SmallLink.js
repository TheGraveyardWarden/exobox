import React from "react";

function SmallLink({name, className, children, onClick}) {
    return <div name={name} onClick={onClick} className={`small_link ${className}`}>
        <p>{children}</p>
    </div>
}

export default SmallLink;