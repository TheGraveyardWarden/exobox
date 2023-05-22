import React from "react";
import RowFlexCon from "../RowFlexCon";
import Label from "./Label";

function PhoneNumberInput({name, className, phoneNumber, setPhoneNumber, verifInput, verifCode, setVerifCode}) {

    const isNum = c => {
        switch(c) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case undefined:
                return true;
            default:
                return false;
        }
    }

    const onVerifInpChange = e => {
        if(e.target.value.length > 4) return;
        setVerifCode(e.target.value);
    }

    const onPhoneChange = e => {
        if(!isNum(e.target.value[e.target.value.length-1])) return;
        if(e.target.value.length > 10) return;
        setPhoneNumber(e.target.value);
    }

    return <div name={name} className={`phone_number_input_con ${className}`}>
        {!verifInput ? <Label>تلفن همراه</Label> : <Label>کد تایید</Label>}
        <RowFlexCon className="normal_input">
            <div className={`ir_code transition ${verifInput && "full_width"}`}>
                <span className={verifInput && "hide"}>+98</span>
                <input onChange={onVerifInpChange} className={`input verif_code_input transition ${!verifInput && "hide"}`} placeholder="9999" value={verifCode} />
            </div>
            <input value={phoneNumber} onChange={onPhoneChange} className={`input ${verifInput && "hide"}`} placeholder="9157999889" />
        </RowFlexCon>
    </div>
}

export default PhoneNumberInput;