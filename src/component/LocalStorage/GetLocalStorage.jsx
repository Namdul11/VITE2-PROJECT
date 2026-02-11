//for name and age
import React from 'react';
const GetLocalStorage = () => {
console.log(localStorage.getItem("name"));


    let fInfo = localStorage.getItem("fatherInfo");
   let  info = JSON.parse(fInfo);
    console.log(info.name);
    return 
        <div>   </div>;
    
};
export default GetLocalStorage;