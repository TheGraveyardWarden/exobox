import React from "react";

function BlueBox({name, className, onClick, counter, setCounter}) {
    return <div className={`blue_box_con ${className}`} name={name} onClick={onClick}>
        {/* <div className="blue_box_counter">{counter}</div> */}
        {/* <img alt='blue box img' src={user_pic_2} className="header_img" /> */}
        
        <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.5416 26.8646C33.5708 27.9896 33.2791 29.0546 32.7541 29.9696C32.4625 30.5096 32.0687 31.0046 31.6312 31.4096C30.625 32.3696 29.2979 32.9546 27.825 32.9996C25.6958 33.0446 23.8145 31.9196 22.7791 30.1946C22.225 29.3096 21.8895 28.2446 21.875 27.1196C21.8312 25.2296 22.6479 23.5196 23.9604 22.3946C24.952 21.5546 26.2062 21.0296 27.577 20.9996C28.3431 20.9817 29.1052 21.1192 29.8196 21.4042C30.534 21.6893 31.1868 22.1164 31.7407 22.661C32.2946 23.2057 32.7387 23.8573 33.0478 24.5785C33.3568 25.2998 33.5246 26.0766 33.5416 26.8646Z" stroke="#D9D9D9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.4332 27.0452L26.9061 28.4852L29.9541 25.4552M4.6228 11.1602L17.4999 18.8252L30.2895 11.2052M17.4999 32.4152V18.8102" stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31.5145 13.755V22.245C31.5145 22.32 31.5145 22.38 31.4999 22.455C30.4791 21.54 29.1666 21 27.7083 21C26.3374 21 25.0687 21.495 24.0624 22.32C23.3779 22.8795 22.8255 23.5913 22.4466 24.4018C22.0678 25.2124 21.8723 26.1007 21.8749 27C21.8749 28.125 22.1812 29.19 22.7208 30.09C22.852 30.33 23.0124 30.555 23.1874 30.765L20.5187 32.28C18.8562 33.24 16.1437 33.24 14.4812 32.28L6.69369 27.84C4.9291 26.835 3.48535 24.315 3.48535 22.245V13.755C3.48535 11.685 4.9291 9.165 6.69369 8.16L14.4812 3.72C16.1437 2.76 18.8562 2.76 20.5187 3.72L28.3062 8.16C30.0708 9.165 31.5145 11.685 31.5145 13.755Z" stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    </div>
}

export default BlueBox;