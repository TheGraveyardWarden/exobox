import React from "react";
import RowFlexCon from "../RowFlexCon";

function SortBy({name, className, onClick}) {
    return <RowFlexCon className={`sort_by full_width ${className}`} onClick={onClick} name={name}>
        <h3>: مرتب سازی بر اساس</h3>        
        <h4>پر‌فروش‌ترین</h4>
        <h4>پر‌بازدید‌ترین</h4>
        <h4>جدید‌ترین</h4>
        <h4>ارزان‌ترین</h4>
        <h4>گران‌ترین</h4>
    </RowFlexCon>
}

export default SortBy;