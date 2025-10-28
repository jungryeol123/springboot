import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState();
    const [imgList,setImageList] = useState([]);
    const [product,setProduct] = useState({});

    return (
        
        <ProductContext.Provider value ={{
                                productList, setProductList,
                                product,setProduct,
                                imgList, setImageList
                                }}>
                {children}
        </ProductContext.Provider>
        
    )
}