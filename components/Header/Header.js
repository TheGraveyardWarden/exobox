import React, { useState } from "react";
import AccountBtn from "../Buttons/AccountBtn";
import RowFlexCon from "../RowFlexCon";
import BlueBox from "./BlueBox";
import RedBox from "./RedBox";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import HeaderLink from "./HeaderLink";
import Logo from "../Logo";
import CategoriesPopup from "./CategoriesPopup";
import MotherBox from "./MotherBox";

function Header() {
    const [sTerm, setSTerm] = useState("");
    const [blueBoxCounter, setBlueBoxCounter] = useState(6);
    const [showMotherBoxPopup, setShowMotherBoxPopup] = useState(false);
    const [motherBoxStatus, setMotherBoxStatus] = useState('باکس های من');

    const onSearch = () => {
        console.log(sTerm);
    }

    const onBlueBoxClick = () => {
        setBlueBoxCounter(prevCounter => {
            return prevCounter+1;
        })
    }

    const onMotherBoxClick = (e) => {
        if(e.target.classList.contains('mother_box_x')) return;
        setShowMotherBoxPopup(prevState => {
            return !prevState;
        })
    }

    return <RowFlexCon className={"header_con"}>
        <Link to='/login'><AccountBtn/></Link>
        <RowFlexCon className={'header_right'}>
            <BlueBox onClick={onBlueBoxClick} counter={blueBoxCounter} setCounter={setBlueBoxCounter} />
            <MotherBox onClick={onMotherBoxClick} motherBoxStatus={motherBoxStatus} setMotherBoxStatus={setMotherBoxStatus} showMotherBoxPopup={showMotherBoxPopup} />
            <RedBox/>
            <SearchBox onSearch={onSearch} sTerm={sTerm} setSTerm={setSTerm} />
            <HeaderLink to="/">صفحه اصلی</HeaderLink>
            <HeaderLink to="/aboutus">درباره ما</HeaderLink>
            <HeaderLink to="/contactus">تماس با ما</HeaderLink>
            <CategoriesPopup/>
            <Logo className={'a_bit_margin'} />
        </RowFlexCon>
    </RowFlexCon>
}

export default Header;