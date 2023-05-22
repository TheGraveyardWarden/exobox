import React from "react";
import ColumnFlexCon from "../ColumnFlexCon";
import RowFlexCon from "../RowFlexCon";
import Label from "./Label";
import {male, female} from '../../assets/media'

function GenderInput({name, className, onClick, gender, setGender}) {

    const onFemaleClick = () => {
        setGender('female');
        let el = document.getElementsByName('gender_selector')[0];
        el.style.transform = 'translate(3px, 0)';
    }

    const onMaleClick = () => {
        setGender('male');
        let el = document.getElementsByName('gender_selector')[0];
        el.style.transform = 'translate(84px, 0)';
    }

    return <ColumnFlexCon name={name} onClick={onClick} className={`gender_input_con ${className}`}>
        <Label>جنسیت خودرا وارد کنید</Label>
        <RowFlexCon className={'gender_input'}>
            <div name="gender_selector" className="gender_selector transition gender_female"></div>
            <img onClick={onFemaleClick} className="gender_img transition" alt="female" src={female} />
            <img onClick={onMaleClick} className="gender_img transition" alt="male" src={male} />
        </RowFlexCon>
        <RowFlexCon className={'gender_title_con'}>
            <p>زن</p>
            <p>مرد</p>
        </RowFlexCon>
    </ColumnFlexCon>
}

export default GenderInput;