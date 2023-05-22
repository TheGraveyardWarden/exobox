import React from "react";
import RowFlexCon from "../RowFlexCon";
import { user_pic_1 } from "../../assets/media";

function AccountBtn({name, className, onClick}) {
    return <RowFlexCon className={`account_btn_con ${className}`} name={name} onClick={onClick}>
        <img alt="user pic" src={user_pic_1} className="header_img" />
        <p className="header_title">حساب کاربری</p>
    </RowFlexCon>
}

export default AccountBtn;