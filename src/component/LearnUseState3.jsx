import { useState } from "react";

const LearnUseState3 = () => {
    let [name, setName] = useState("Namdul lama");
    console.log("i am component");
    

    return (
        <div>
            <p>name is {name}</p>
            <button
                onClick={(e) => {
                   setName("Pema lama");
                    
                }}
            >
                Change Name
            </button>
        </div>
    );
};
export default LearnUseState3;
//is to make variable banaune jun browser ma print huna lai variable change baye matra render hunxa 