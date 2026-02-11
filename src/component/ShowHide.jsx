import { useState } from "react";

const ShowHide = () => {
    let [show,setShow]= useState(true);
    return (
        <div>
            {show ?(<img src="./kimchi_image.webp" width="200" height="200" />):null}{/* {show?(img src="ABC.jpg"/>:null)} */}
           <button onClick={(e)=>setShow(true)}>show</button>
           <button onClick={(e)=>setShow(false)}>hide</button>
        </div>
    );
}
export default ShowHide;
