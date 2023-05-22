import React from "react";
import Header from "../Header/Header";
import RowFlexCon from "../RowFlexCon";
import CategoriesProducts from "./CategoriesProducts";
import CategoriesFilters from "./CategoriesFilters";

function Categories() {
    return <>
        <Header/>
        <RowFlexCon className={'categories'}>
            <CategoriesProducts/>
            <CategoriesFilters/>
        </RowFlexCon>
    </>
}

export default Categories;