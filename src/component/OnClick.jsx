const OnClick = () => {
    const handleButton2 = (e) => {
        console.log("Button 2 Clicked!");
    }
    const handleButton3 = (a,b) =>{
        return(e)=>{ 
            console.log(a,b);
        }
    }
    return (
        <div>
            <button onClick={(e) => console.log("Button Clicked!")}>Click Me 1</button>
            <button onClick={handleButton2}>button2</button>
            <button onClick={handleButton3(1,2)}>button3</button>
        </div>
        
    ) 
}

export default OnClick;