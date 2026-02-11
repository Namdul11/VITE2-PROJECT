 
import React, { useState } from 'react';
//rendering object using usestate
const LearnUseState4 = () => {
    let [count,setCount]= useState(0);//2
    console.log("i am component");
    return (
        <div>
            <p>count is : {count}</p>
            <button 
            onClick={(e) =>
                setCount(count + 1)}
            >
                +
            </button>
        </div>
    );
};
export default LearnUseState4;
//when useState variable changr compo get render



