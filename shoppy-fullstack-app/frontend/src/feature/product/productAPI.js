import React from 'react';
import { createProduct,filterProduct } from './productSlice.js';
import { axiosData,axiosGet, groupByRows,axiosPost } from '../../utils/dataFetch.js';


//상품 QnA
export const getQna = async(pid) =>  {
    const url = "/product/qna";
    const qna = await axiosPost(url,{"pid" : pid});
//    const list = JSON.parse(qna.list);
//    console.log("qna------", qna);
    return qna;
}
// 상품 상세 정보
export const getDetailinfo = async(pid) =>  {
    const url = "/product/detailinfo";
    const info = await axiosPost(url,{"pid" : pid});
    const list = JSON.parse(info.list);
    return {...info,list:list};
}
export const getProduct = (pid) => async (dispatch) => {
    const url = "/product/pid";
    const product = await axiosPost(url,{"pid" : pid});
    console.log("product----------------" ,product)
    dispatch(filterProduct({"product":product}));
}

export const getProductList = (number) => async (dispatch) => {
//    const jsonData = await axiosData("/data/products.json");
    const url = "/product/all";

    const jsonData = await axiosGet(url);
    console.log("jsonData--->",jsonData);
    const rows = groupByRows(jsonData, number);
    dispatch(createProduct({"productList": rows, "products":jsonData}));
}
