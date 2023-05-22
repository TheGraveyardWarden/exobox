import React from "react";

function ShinyBtn({name, className, onClick, value}) {
    return <div name={name} onClick={onClick} className={`shiny_btn_con ${className}`} >
        <h3 className="shiny_btn_value">{value}</h3>
    </div>
}

export default ShinyBtn;