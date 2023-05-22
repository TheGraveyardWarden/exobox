import React from "react";
import ColumnFlexCon from "../ColumnFlexCon";
import RowFlexCon from "../RowFlexCon";

function CategoriesFilters() {
    return <ColumnFlexCon className={'right_cat'}>
        <RowFlexCon className={'full_width right_cat_header'}>
            <div title="Remove filters" className="rch_remove">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" fill="none" viewBox="0 0 17 21">
                    <path fill="#F41D00" fillOpacity=".96" fillRule="evenodd" d="M16.286 12.98a.39.39 0 0 1-.551 0L4.21 1.454a.39.39 0 1 1 .55-.55l11.525 11.523a.39.39 0 0 1 0 .551Z" clipRule="evenodd"/>
                    <path fill="#F41D00" fillOpacity=".96" fillRule="evenodd" d="M14.222 8.529 16.69 5.41c.741-.936.074-2.314-1.12-2.314H8.79l1.299 1.298h5.481a.13.13 0 0 1 .102.21l-2.373 3 .924.925Zm-5.97-4.135-1.3-1.298H5.851L7.15 4.394h1.1ZM12 9.244l.487-.614.924.924-.486.615L12 9.245Zm-6.686-4.85H1.485a.13.13 0 0 0-.098.215l6.22 7.186h2.376l1.206-1.525.925.924-1.168 1.476v4.86c0 .426-.19.83-.518 1.101L9 19.811c-.932.77-2.338.107-2.338-1.1v-6.025L.405 5.459c-.8-.925-.143-2.363 1.08-2.363h2.53l1.299 1.298ZM7.96 18.71v-5.617h1.688v4.437a.13.13 0 0 1-.047.1l-1.428 1.18a.13.13 0 0 1-.213-.1Z" clipRule="evenodd"/>
                </svg>
            </div>
            <h3 className="rch_head">فیلتر ها</h3>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">دسته بندی</p>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">برند</p>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">محدوده قیمت</p>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">مناسب برای</p>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">قابلیت حک نام</p>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">فقط کالا های موجود</p>
        </RowFlexCon>
        <RowFlexCon className={'full_width rcb'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill rcb_arrow" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p className="rcb_p">فقط بر اساس باکس</p>
        </RowFlexCon>
    </ColumnFlexCon>
}

export default CategoriesFilters;