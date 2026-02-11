/* import React, { useState } from 'react' */

import { useState } from "react";
/* 
name=>text
code=>text
capital=>text
language=>nepali.hinfdi.chinese,japanese,italian
indentation 
*/
const Form4 = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [capital, setCapital] = useState("");
  const [language, setLanguage] = useState("nepali");
  const [currency, setCurrency] = useState("rupee");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
      name: name,
      code: code,
      capital: capital,
      language: language,
      currency: currency,
    };
    console.log(data);
  };
  let languageList = [
    { value: "hindi", label: "Hindi" },
    { value: "nepali", label: "Nepali" },
    { value: "chineese", label: "Chineese" },
    { value: "japaneese", label: "Japaneese" },
    { value: "italian", label: "Italian" },
  ];

  let CurrencyOption = [
    { value: "rupee", label: "Rs" },
    { value: "yen", label: "Yen" },
    { value: "doller", label: "$" },
  ];

  return (
    <>
        
      <form action="" onSubmit={handleSubmit}>
        <div>
              
          <div>
                        <label htmlFor="name">Name :</label>
                        
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
                
          </div>
              
          <div>
                    <label htmlFor="code">Code :</label>
                    
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
                
          </div>
              
          <div>
                    <label htmlFor="capital">Capital :</label>
                    
            <input
              type="text"
              id="capital"
              value={capital}
              onChange={(e) => {
                setCapital(e.target.value);
              }}
            />
                
          </div>
              
          <div>
                    <label>Currency :</label>
                    
            {CurrencyOption.map((item, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    id={item.value}
                    value={item.value}
                    checked={currency === item.value}
                    onChange={(e) => {
                      setCurrency(e.target.value);
                    }}
                  />
                          <label htmlFor={item.value}>{item.label}</label>
                </div>
              );
            })}
                
          </div>
              
          <div>
                    <label htmlFor="language">Language :</label>
                        
            <select
              name=""
              id="language"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
                          
              {languageList.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
                      
            </select>
                
          </div>
        </div>
        <div>
              <button>Submit</button>
        </div>
          
      </form>
        
    </>
  );
};

export default Form4;
