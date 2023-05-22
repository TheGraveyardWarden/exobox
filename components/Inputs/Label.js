import React from "react";

function Label({children, className, optional}) {
    return <div className={`label ${className}`}>
        {!optional ? (`*`) : (`(اختیاری) `)}{children}
    </div>
}

export default Label;