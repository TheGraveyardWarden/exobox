import React from "react";
import RowFlexCon from "../RowFlexCon";
import Label from "./Label";

function PasswordInput({className, password, setPassword, name}) {

    const onChange = e => {
        setPassword(e.target.value);
    }

    return <div name={name} className={`password_input_con ${className}`}>
        <Label>پسوورد</Label>
        <RowFlexCon className={"normal_input"}>
            <input value={password} onChange={onChange} type="password" className="input width_350" placeholder="***********" />
        </RowFlexCon>
    </div>
}

export default PasswordInput;