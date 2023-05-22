import React from "react";

function ColumnFlexCon({name, children, className, onClick}) {
    return <div name={name} onClick={onClick} className={`column_flex_con ${className}`}>
        {children}
    </div>
}

export default ColumnFlexCon;