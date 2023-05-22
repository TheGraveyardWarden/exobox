import React, { useState } from "react";
import RowFlexCon from "../RowFlexCon";
import { airpods, decorates, decorates2, makeup, paintings, perfume,
        ring, shirts, vallet, vase, videogame, toys } from '../../assets/media'

function HomeCategories({name, className, onClick}) {
    // eslint-disable-next-line
    const [categories, setCategories] = useState([
        {
            name: 'name',
            img: airpods
        },
        {
            name: 'name',
            img: decorates
        },
        {
            name: 'name',
            img: decorates2
        },
        {
            name: 'name',
            img: makeup
        },
        {
            name: 'name',
            img: paintings
        },
        {
            name: 'name',
            img: perfume
        },
        {
            name: 'name',
            img: ring
        },
        {
            name: 'name',
            img: shirts
        },
        {
            name: 'name',
            img: vallet
        },
        {
            name: 'name',
            img: vase
        },
        {
            name: 'name',
            img: videogame
        },
        {
            name: 'name',
            img: toys
        }
    ])
    return <RowFlexCon name={name} onClick={onClick} className={`home_categories ${className}`} >
        {categories.map((c, i) => (
            <div key={i} className="category_img_con">
                <img alt={c.name} src={c.img} className='category_img' />
            </div>
        ))}
    </RowFlexCon>
}

export default HomeCategories;