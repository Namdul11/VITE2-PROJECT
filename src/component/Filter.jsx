 const Filter = () => {
     const products = [
         { name: "mobile", price: 10000},
         { name: "laptop", price: 50000},
         { name: "tv", price: 20000}
     ];
     return (
        <div>
            {products.filter((value, index)=>{
                return value.price > 15000;
            }).map((value, index)=>{
                return (
                    <p>
                        {value.name} costs NRs {value.price}
                    </p>
                )
            })}
        </div>
     )
    }
    export default Filter;