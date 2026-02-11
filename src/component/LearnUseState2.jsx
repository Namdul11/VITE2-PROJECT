  
import React, { useState } from 'react';

const LearnUseState2 = () => {
  const [count, setCount] = useState(0);    
    return (
    <div>
        <p>Count is: {count}</p>
        <button 
        onClick={(e) =>
         setCount(count + 1)}
         >
            +
            </button>
        <button onClick={(e) =>
             setCount(count - 1)}>
                -
                </button>
    </div>
  )
}
export default LearnUseState2;