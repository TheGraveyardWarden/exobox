import React from "react";
import Label from "./Label";
import RowFlexCon from "../RowFlexCon";

function EmailVerifInput({name, className, verifCode, setVerifCode}) {

    const onVerifInpChange = e => {
        if(e.target.value.length > 4) return;
        setVerifCode(e.target.value);
    }

    return <div name={name} className={`phone_number_input_con ${className}`}>
        <Label>ایمیل خودرا تایید کنید</Label>
        <RowFlexCon className="normal_input">
            <div className={`ir_code transition full_width`}>
                <input onChange={onVerifInpChange} className={`input verif_code_input transition`} placeholder="9999" value={verifCode} />
            </div>
        </RowFlexCon>
    </div>
}

export default EmailVerifInput;