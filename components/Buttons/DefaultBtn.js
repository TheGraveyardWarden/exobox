import React from "react";
import ColumnFlexCon from "../ColumnFlexCon";

function DefaultBtn({name, value, className, onSubmit, showWrong}) {
    return <ColumnFlexCon name={name} onClick={onSubmit} className={className}>
        <ColumnFlexCon name={`${name}2`} className={`default_btn ${className}`}>
            <p>{value}</p>
        </ColumnFlexCon>
        {showWrong && (
            <p className="phone_number_is_wrong">!شماره اشتباه است</p>
        )}
    </ColumnFlexCon>
}

export default DefaultBtn;