import React from "react";

function RowFlexCon({name, children, className, onClick}) {
    return <div name={name} onClick={onClick} className={`row_flex_con ${className}`}>
        {children}
    </div>
}

export default RowFlexCon;