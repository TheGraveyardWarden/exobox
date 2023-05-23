import React, {useEffect, useState} from "react";
import SortBy from "./SortBy";
import RowFlexCon from "../RowFlexCon";
import { ring, shirts, vallet, vase, videogame, toys } from "../../assets/media";
import CategoriesProduct from "./CategoriesProduct";
import ColumnFlexCon from "../ColumnFlexCon";

function CategoriesProducts() {
    const [products, setProducts] = useState([
        {
            img: ring,
            title: 'ایرپادز طرح چرم برای سیننحشخش کد 299',
            price: '2.500.000',
            pplRated: 122,
            rate: [1,1,0,0,0]
        },
        {
            img: shirts,
            title: 'ایرپادز طرح چرم برای سیننحشخش کد 299',
            price: '2.500.000',
            pplRated: 122,
            rate: [1,1,0,0,0]
        },
        {
            img: vallet,
            title: 'ایرپادز طرح چرم برای سیننحشخش کد 299',
            price: '2.500.000',
            pplRated: 122,
            rate: [1,1,0,0,0]
        },
        {
            img: vase,
            title: 'ایرپادز طرح چرم برای سیننحشخش کد 299',
            price: '2.500.000',
            pplRated: 122,
            rate: [1,1,0,0,0]
        },
        {
            img: videogame,
            title: 'ایرپادز طرح چرم برای سیننحشخش کد 299',
            price: '2.500.000',
            pplRated: 122,
            rate: [1,1,0,0,0]
        },
        {
            img: toys,
            title: 'ایرپادز طرح چرم برای سیننحشخش کد 299',
            price: '2.500.000',
            pplRated: 122,
            rate: [1,1,0,0,0]
        }
    ])

    const onFavoriteHover = (blur, fav_img, add_box) => {
        blur.classList.remove('no_vis');
        fav_img.style.transform = 'scale(1.2)';
        add_box.classList.remove('no_vis');
      }
    
      const onFavoriteLeave = (blur, fav_img, add_box) => {
        blur.classList.add('no_vis');
        fav_img.style.transform = 'none';
        add_box.classList.add('no_vis');
      }
    
      useEffect(() => {
        let blurs = document.querySelectorAll('.blur');
        let fav_imgs = document.querySelectorAll('.cp_image');
        let add_boxes = document.querySelectorAll('.add_box');
        for(let i = 0; i < blurs.length; i++) {
          blurs[i].addEventListener('mouseenter', () => onFavoriteHover(blurs[i], fav_imgs[i],add_boxes[i]));
          blurs[i].addEventListener('mouseleave', () => onFavoriteLeave(blurs[i], fav_imgs[i],add_boxes[i]));
          add_boxes[i].addEventListener('mouseenter', () => onFavoriteHover(blurs[i], fav_imgs[i],add_boxes[i]));
          add_boxes[i].addEventListener('mouseleave', () => onFavoriteLeave(blurs[i], fav_imgs[i],add_boxes[i]));
        }
      }, [])

    return <div className={'left_cat'}>
        <SortBy/>
        <ColumnFlexCon className={`cpc`}>
            <RowFlexCon className={'flex_start flex_wrap_wrap'}>
                {products.map((p, i) => {
                    return <CategoriesProduct img={p.img} title={p.title} price={p.price} pplRated={p.pplRated} rate={p.rate} key={i} />
                })}
            </RowFlexCon>
            <div className="load_more_product">ادامه محصولات</div>
        </ColumnFlexCon>
    </div>
}

export default CategoriesProducts;