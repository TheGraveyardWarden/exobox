import React, { useEffect } from "react";
import HeaderLink from "./HeaderLink";

function CategoriesPopup() {
    useEffect(() => {
        let categories = document.getElementsByName('categories')[0];
        let popup = document.getElementsByName('categories_popup');
        categories.addEventListener('mouseenter', () => {
            // Animation.Translate('gift', 0, -30);
            popup[0].style.visibility = 'visible';
            popup[0].style.opacity = '0.9';
            popup[1].style.visibility = 'visible';
            popup[1].style.opacity = '0.9';
        });
        categories.addEventListener('mouseleave', () => {
            // Animation.RemoveTranslate('gift');
            popup[0].style.opacity = '0';
            popup[0].style.visibility = 'hidden';
            popup[1].style.opacity = '0';
            popup[1].style.visibility = 'hidden';
        });
    }, [])
    return <div name="categories" className="categories_con">
        <HeaderLink to="/categories">دسته بندی</HeaderLink>
        <div className="categories_popup_con" name='categories_popup'></div>
        <div className="categories_popup_con" name='categories_popup'>

        </div>
    </div>
}

export default CategoriesPopup;