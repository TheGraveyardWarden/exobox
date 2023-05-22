import React, {useEffect} from "react";
import "./assets/css";
import Header from "./components/Header/Header";
import Carousel from "./components/Home/Carousel";
import Greeting from "./components/Home/Greeting";
import { banner_1, banner_2, bag, bottle, neckless, dress, shirt } from "./assets/media";
import { useState } from "react";
import Topic from "./components/Topic";
import FavouriteProduct from "./components/Home/FavouriteProduct";
import HomeCategories from "./components/Home/HomeCategories";
import Faq from "./components/Home/Faq";

function App() {
  // eslint-disable-next-line
  const [banners, setBanners] = useState([banner_1, banner_2, banner_1, banner_2]);
  // eslint-disable-next-line
  const [mostFavourites, setMostFavourites] = useState([
    {
      img: shirt,
      liked: true,
      name: 'تیشرت طرح اسکلت هاوایی',
      price: 120000,
      available: true,
      rate: [1, 1, 0, 0, 0],
      pplRated: 122
    },
    {
      img: bottle,
      liked: false,
      name: 'بطری ورزشی با طرح فضانورد',
      price: 120000,
      available: true,
      rate: [1, 1, 1, 0, 0],
      pplRated: 122
    },
    {
      img: neckless,
      liked: false,
      name: 'ست طلا با کد 155',
      price: 3200000,
      available: false,
      rate: [1, 0, 0, 0, 0],
      pplRated: 122
    },
    {
      img: bag,
      liked: false,
      name: 'کیف پول چرمی ساده',
      price: 120000,
      available: true,
      rate: [1, 1, 1, 1, 0],
      pplRated: 122
    },
    {
      img: dress,
      liked: false,
      name: 'لباس آستین دار با طرح پروانه',
      price: 120000,
      available: true,
      rate: [1, 1, 1, 1, 1],
      pplRated: 122
    },
    {
      img: shirt,
      liked: true,
      name: 'تیشرت طرح اسکلت هاوایی',
      price: 120000,
      available: true,
      rate: [1, 1, 0, 0, 0],
      pplRated: 122
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
    let fav_imgs = document.querySelectorAll('.favourite_img');
    let add_boxes = document.querySelectorAll('.add_box');
    for(let i = 0; i < blurs.length; i++) {
      blurs[i].addEventListener('mouseenter', () => onFavoriteHover(blurs[i], fav_imgs[i],add_boxes[i]));
      blurs[i].addEventListener('mouseleave', () => onFavoriteLeave(blurs[i], fav_imgs[i],add_boxes[i]));
      add_boxes[i].addEventListener('mouseenter', () => onFavoriteHover(blurs[i], fav_imgs[i],add_boxes[i]));
      add_boxes[i].addEventListener('mouseleave', () => onFavoriteLeave(blurs[i], fav_imgs[i],add_boxes[i]));
    }
  }, [])

  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Carousel
        element={<>
            {banners.map((b, i) => (
              <img alt={b} key={i} src={b} className='banner_img' />
            ))}
        </>}
        size={banners.length}
        margin={50}
        width={920}
        cKey={0}
      />
      <Topic>محبوب ترین ها</Topic>
      <Carousel
        element={mostFavourites.map((fav, i) => (
          <FavouriteProduct key={i} img={fav.img} liked={fav.liked} name={fav.name} price={fav.price} available={fav.available} rate={fav.rate} pplRated={fav.pplRated} />
        ))}
        size={mostFavourites.length}
        margin={40}
        width={300}
        cKey={1}
      />
      <Topic>دسته بندی ها</Topic>
      <HomeCategories/>
      <Faq/>
    </div>
  );
}

export default App;
