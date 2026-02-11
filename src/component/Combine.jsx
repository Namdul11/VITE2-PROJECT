const Combine=()=>{
    let products = [
        { name: "laptop", price: 1,quantity:2},
        { name: "mobile", price: 5,quantity:2},
        { name: "tv", price:3,quantity:1}
    ];
    // find the total price of product whose price is greater than 2
    return(
        <div>
           {products
           .filter((product) => product.price > 2)
           .reduce((total, product) => total + product.price * product.quantity, 0 )}
        </div>
    )
};
export default Combine;