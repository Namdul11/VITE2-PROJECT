//setitem name,age,fatnerinfo
import React from 'react';
const SetLocalStorage = () => {
    localStorage.setItem("name","Namdul Lama");
    localStorage.setItem("age","22");
    let fatherInfo = {
        name: "Pema Lama",age: 72
    };
    localStorage.setItem("fatherInfo",JSON.stringify(fatherInfo));
    return (
        <div> 
            SetLocalStorage
        </div>
    );
}
export default SetLocalStorage;
        
