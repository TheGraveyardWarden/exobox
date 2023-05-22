import React from "react";
import RowFlexCon from "../RowFlexCon";
import Label from "./Label";

function TextInput({name, className, type, label, placeholder, value, setValue, inputClassName, optional}) {

    const onInpChange = e => {
        setValue(e.target.value);
    }

    return <div name={name} className={`text_input_con ${className}`} >
        <Label optional={optional}>{label}</Label>
        <RowFlexCon className={"normal_input"}>
            <input type={type && type} placeholder={placeholder && placeholder} value={value && value} onChange={onInpChange && onInpChange} className={`input ${inputClassName}`} />
        </RowFlexCon>
    </div>
}

export default TextInput;