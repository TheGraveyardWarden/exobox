import React, { useEffect } from "react";
import ColumnFlexCon from "../ColumnFlexCon";
import RowFlexCon from "../RowFlexCon"
import Animation from "../Animation";
import FaqBackground from "./FaqBackground";

function Faq({name, className, onClick}) {
    const faqToTop = n => {
        switch(n) {
            case 0:
                return 153;
            case 1:
                return 258;
            case 2:
                return 363;
            case 3:
                return 467;
            case 4:
                return 571;
            default:
                return 0;
        }
    }
    useEffect(() => {
        let faqs = document.querySelectorAll('.faq');
        for(let i = 0; i < faqs.length; i++) {
            faqs[i].addEventListener('click', () => {
                Animation.FaqOpen('faq', i, faqToTop(i));
            });
        }
    }, [])
    return <ColumnFlexCon name={name} onClick={onClick} className={`faq_con ${className}`} >
        <FaqBackground className="faq_background"/>
        <h2 className="faq_title">پرسش‌های متداول</h2>
        <div className="faq faq_1">
            <RowFlexCon className={'full_width faq_header'}>
                <p>button</p>
                <p className="faq_name">چطور میتوانم سفارشم را پیگیری کنم ؟</p>
            </RowFlexCon>
            <p className="faq_description no_vis">خیر امکان مرجوع کردن کارت هدیه نمی باشد</p>
        </div>
        <div className="faq faq_2">
            <RowFlexCon className={'full_width faq_header'}>
                <p>button</p>
                <p className="faq_name">چطور میتوانم سفارشم را لغو کنم ؟</p>
            </RowFlexCon>
            <p className="faq_description no_vis">خیر امکان مرجوع کردن کارت هدیه نمی باشد</p>
        </div>
        <div className="faq faq_3">
            <RowFlexCon className={'full_width faq_header'}>
                <p>button</p>
                <p className="faq_name">چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟</p>
            </RowFlexCon>
            <p className="faq_description no_vis">خیر امکان مرجوع کردن کارت هدیه نمی باشد</p>
        </div>
        <div className="faq faq_4">
            <RowFlexCon className={'full_width faq_header'}>
                <p>button</p>
                <p className="faq_name">چطور میتوانم کلمه عبور ( رمز ) خود را بازیابی کنم؟</p>
            </RowFlexCon>
            <p className="faq_description no_vis">خیر امکان مرجوع کردن کارت هدیه نمی باشد</p>
        </div>
        <div className="faq faq_5">
            <RowFlexCon className={'full_width faq_header'}>
                <p>button</p>
                <p className="faq_name">آیا میتوانم کارت هدیه خود را مرجوع کنم؟</p>
            </RowFlexCon>
            <p className="faq_description no_vis">خیر امکان مرجوع کردن کارت هدیه نمی باشد</p>
        </div>
    </ColumnFlexCon>
}

export default Faq;