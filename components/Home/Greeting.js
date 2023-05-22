import React, { useEffect } from "react";
import ShinyBtn from "../Buttons/ShinyBtn";
import ColumnFlexCon from "../ColumnFlexCon";
import RowFlexCon from "../RowFlexCon";
import { gift } from "../../assets/media";
import Animation from "../Animation";

function Greeting() {
    useEffect(() => {
        let shinyBtn = document.getElementsByName('shiny_btn')[0];
        shinyBtn.addEventListener('mouseenter', () => {
            Animation.Translate('gift', 0, -30);
        })
        shinyBtn.addEventListener('mouseleave', () => {
            Animation.RemoveTranslate('gift');
        })
    }, [])
    return <RowFlexCon className={'greeting_con'}>
        <ColumnFlexCon className={'greeting_left'}>
            <h1 className="greeting_title">با هوش مصنوعی بهترین<br/> 
            ! هـدیه رو انتـخـاب کـن</h1>
            <ShinyBtn name='shiny_btn' value='بــزن بــریــم' />
        </ColumnFlexCon>
        <img name="gift" alt='gift' src={gift} className='greeting_gift transition' />
    </RowFlexCon>
}

export default Greeting;