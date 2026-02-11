     
import React from 'react';

const Reduce = () => {
    let products = [
        {name: 'laptop', price: 1,quantity:2},
        {name: 'phone', price: 5, quantity:2},
        {name: 'tv', price: 3, quantity:1},
    ];  
     return <div>{
      /*   products.reduce((pre,cur)=>{
            return pre + cur.price;
        },0)} */
          products.reduce((pre,cur)=>{
            return pre + cur.price*cur.quantity;
        },0)}
        </div>
};
export default Reduce;

