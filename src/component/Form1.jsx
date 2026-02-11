//for text,number,date,email,password,checkbox,radio,select,textarea 
import React from 'react';

const Form1 = () => {
    return (
        <div>
            <input type="text"  /><br />
            <input type="number"  /><br />
            <input type="date" /><br />
            <input type="email"  /><br />
            <input type="password"  /><br />
            <input type="checkbox" /> Checkbox Input<br />
            <input type="radio" name="radioGroup" /> Radio Input<br />
            <select>
                <option value="">Nepal</option>
                <option value="option1">India</option>
                <option value="option2">china</option>
            </select><br />
            <textarea name="" id="  "></textarea>
        </div>
    );
}
export default Form1;
