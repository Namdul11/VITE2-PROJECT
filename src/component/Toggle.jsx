/* rafce    */
import React, { useState } from 'react';
//toggle show hide image using usestate type=text and type=password and if else
const Toggle = () => {
    let [type,setType]= useState("password");
    return (
        <div>
            <input type={type} />
            <button onClick={(e)=>{ 
                if(type==="password"){
                    setType("text");    
                }else{
                    setType("password");
                }
            }}>
                toggle
            </button>
        </div>
    );
}
export default Toggle;


