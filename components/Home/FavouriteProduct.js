import React from "react";
import ColumnFlexCon from "../ColumnFlexCon";
import RowFlexCon from "../RowFlexCon";
import { tick, tuman, redX, star, unstar } from "../../assets/media";

function FavouriteProduct({img, liked, name, price, available, rate, pplRated}) {
    return <ColumnFlexCon className='favourite_product_con'>
        <div style={{position: 'relative', borderRadius: '35px', overflow: 'hidden', width: '300px', height: '300px'}}>
            <img alt={name} src={img} className='favourite_img transition' />
            
            <svg className="add_box no_vis transition" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85.375 74.9168H72.9584M79.1667 68.8335V81.2919M95.8334 75.0002C95.8334 78.1252 94.9584 81.0835 93.4167 83.5835C92.5417 85.0835 91.4167 86.4169 90.125 87.5002C87.2084 90.1252 83.375 91.6669 79.1667 91.6669C74.0834 91.6669 69.5417 89.3752 66.5417 85.7919C66.4584 85.6669 66.3334 85.5835 66.25 85.4585C65.75 84.8752 65.2917 84.2502 64.9167 83.5835C63.3306 81.0019 62.4939 78.0301 62.5 75.0002C62.5 69.7502 64.9167 65.0418 68.75 62.0002C71.625 59.7085 75.25 58.3335 79.1667 58.3335C83.3334 58.3335 87.0834 59.8335 90 62.3752C90.5 62.7502 90.9584 63.2085 91.375 63.6668C94.125 66.6668 95.8334 70.6252 95.8334 75.0002Z" stroke="#D9D9D9" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.208 31L49.9997 52.2917L86.5414 31.125M49.9997 90.0417V52.25" stroke="#D9D9D9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M90.0414 38.2085V61.7918C90.0414 62.0001 90.0414 62.1668 89.9997 62.3751C87.083 59.8335 83.333 58.3335 79.1664 58.3335C75.2497 58.3335 71.6247 59.7085 68.7497 62.0001C66.7939 63.5544 65.2155 65.5315 64.1331 67.783C63.0506 70.0345 62.4922 72.502 62.4997 75.0001C62.4997 78.1251 63.3747 81.0835 64.9164 83.5835C65.2914 84.2501 65.7497 84.8751 66.2497 85.4585L58.6247 89.6668C53.8747 92.3335 46.1247 92.3335 41.3747 89.6668L19.1247 77.3335C14.083 74.5418 9.95801 67.5418 9.95801 61.7918V38.2085C9.95801 32.4585 14.083 25.4585 19.1247 22.6668L41.3747 10.3335C46.1247 7.66683 53.8747 7.66683 58.6247 10.3335L80.8747 22.6668C85.9164 25.4585 90.0414 32.4585 90.0414 38.2085Z" stroke="#D9D9D9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <div className="blur no_vis transition"></div>
        </div>
        <h2 className="favourite_name">{name}</h2>
        <RowFlexCon className='justify_space_between full_width'>
            <RowFlexCon>
                {available ? <img alt='tick' src={tick} className='tick' /> : <img alt='x' src={redX} className='tick' />}
                <p className="favourite_info">: موجود</p>
            </RowFlexCon>
            <RowFlexCon className={'marg_bot'}>
                <img alt='tuman' src={tuman} className='tuman_logo' />
                <p className="favourite_info">{price}</p>
            </RowFlexCon>
        </RowFlexCon>
        <RowFlexCon className={'full_width flex_end'}>
            <p className="favourite_detail">({pplRated})</p>
            {rate.map((c, i) => (
                <img alt={'star'} src={c ? star : unstar} className='star' key={i} />
            ))}
        </RowFlexCon>
    </ColumnFlexCon>
}

export default FavouriteProduct;