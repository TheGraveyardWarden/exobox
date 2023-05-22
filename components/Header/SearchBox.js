import React from "react";
import RowFlexCon from "../RowFlexCon";

function SearchBox({name, className, onClick, sTerm, setSTerm, onSearch}) {
    return <RowFlexCon name={name} className={`search_box_con ${className}`} onClick={onClick} >
        <input className="search_input" placeholder="... جست و جو" value={sTerm && sTerm} onChange={e => setSTerm(e.target.value)} />
        <div onClick={onSearch} className="search_logo_con">
            {/* <img alt='search' src={searchLogo} className="search_logo" /> */}
            
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.08333 12.0417C9.82175 12.0417 12.0417 9.82175 12.0417 7.08333C12.0417 4.34492 9.82175 2.125 7.08333 2.125C4.34492 2.125 2.125 4.34492 2.125 7.08333C2.125 9.82175 4.34492 12.0417 7.08333 12.0417Z" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.8745 14.8753L10.5891 10.5898" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
    </RowFlexCon>
}

export default SearchBox;