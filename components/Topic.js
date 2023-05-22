import React from "react";

function Topic({children, name, onClick, className}) {
    return <h1 name={name} onClick={onClick} className={`topic ${className}`}>
        {children}
    </h1>
}

export default Topic;