const Map1 = () => {
    let products = [
        { name: "laptop", price: 45000},
        { name: "mobile", price: 25000},
        { name: "tv", price: 15000}
    ];
    return (
        <div>
            {products.map((value, index)=>{
                return (
                    <p>
                        {value.name} costs NRs {value.price}
                    </p>
                )
            })}
        </div>
    
    );
}
export default Map1;