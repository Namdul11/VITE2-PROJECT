import React from 'react'

const EffectofData = () => {
    let name = 'namdul';
    let age = 25;
    let isMarried = false;
    let check;
    let a = null;
    let favPerson = ["ram", "shyama", "hari"];
    let father = {name:"karma", age:65};
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{isMarried}</p>
        <p>{check}</p>
        <p>{a}</p>
        <p>{favPerson}</p>
    {/*     <p>{father}</p> */}
    <p>{father.name}</p>
       
    </div>
  )
}

export default EffectofData;
/* 
boolean ,null,undefined are not printed in browser
array element are printed one after another without comma
we cannot print object ,it will throw error object is not valid as a react child
*/