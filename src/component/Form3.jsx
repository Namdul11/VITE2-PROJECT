//for name,price=number,quantity,description,category,manufacturingdate
import React, { useState } from 'react'
const Form3 = () => {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    const [manufacturingDate,setManufacturingDate]=useState("");
        const handleSubmit=(e)=>{ 
        e.preventDefault();
    let data={
        name:name,  
        price:price,
        quantity:quantity,
        description:description,
        category:category,
        manufacturingDate:manufacturingDate
    }
    console.log(data);
    }
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
        <div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type='text' id="name" value={name} onChange={(e)=>{setName(e.target.value)}}>
                </input>

            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type='number' id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}>
                </input>

            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input type='number' id="quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                </input>

            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}>
                </textarea> 
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input type='text' id="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                </input>
            </div>
            <div>
                <label htmlFor="manufacturingDate">Manufacturing Date:</label>
                <input type='date' id="manufacturingDate" value={manufacturingDate} onChange={(e)=>{setManufacturingDate(e.target.value)}}>
                </input>
            </div>
        </div>
        <div><button>Submit</button></div>
            </form>
        </>
    )
}

export default Form3    



            
        