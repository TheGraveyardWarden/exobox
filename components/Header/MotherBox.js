import React from "react";
import RowFlexCon from "../RowFlexCon";
import ColumnFlexCon from "../ColumnFlexCon";

function MotherBox({name, onClick, className, motherBoxStatus, setMotherBoxStatus}) {

    const handlePopupClick = (e) => {
        setMotherBoxStatus(e.target.innerHTML);
    }

    const handleXClick = () => {
        setMotherBoxStatus('باکس های من');
    }

    return <RowFlexCon name={name} onClick={onClick} className={`mother_box ${className}`}>
        <p className="header_title">{motherBoxStatus}</p>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.62573 10.8516L17.5028 18.3036L30.2924 10.8953M17.4999 31.5147V18.2876" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.4812 3.61602L6.69369 7.94727C4.9291 8.92435 3.48535 11.3743 3.48535 13.3868V21.6264C3.48535 23.6389 4.9291 26.0889 6.69369 27.066L14.4812 31.3973C16.1437 32.316 18.8708 32.316 20.5333 31.3973L28.3208 27.066C30.0854 26.0889 31.5291 23.6389 31.5291 21.6264V13.3868C31.5291 11.3743 30.0854 8.92435 28.3208 7.94727L20.5333 3.61602C18.8562 2.68268 16.1437 2.68268 14.4812 3.61602V3.61602Z" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.7947 19.3116V13.9741L10.9551 5.98242" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {motherBoxStatus !== 'باکس های من' && (
            <div onClick={handleXClick} className="mother_box_x">+</div>
        )}
        <ColumnFlexCon className={'mother_box_popup'}>
            <p onClick={handlePopupClick} className="mother_box_popup_p">برادر</p>
            <p onClick={handlePopupClick} className="mother_box_popup_p">پدر</p>
            <p onClick={handlePopupClick} className="mother_box_popup_p">مادر</p>
        </ColumnFlexCon>
    </RowFlexCon>
}

export default MotherBox;