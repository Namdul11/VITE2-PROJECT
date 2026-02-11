
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Product = () => {
    let params = useParams();
    console.log(params);
    let [query]=useSearchParams();
    console.log(query.get("name"));
    return (
        <div>
            This is Product page
        </div>
    );
}

export default Product;

/* 
url=localhost:3000/product/a/b/c/?name=namdul&age=22
*/