const Or = () => {
    let a= 1;
    let z = 2;
    let b;
    let c=null;
    let x="";

    d=a||b||b;//1
    e=c||b||z;//2
    e=c||a||x;//"1"
    e=b||c||x;//""

    // "",0,false,null,undefined = false
    //or is used tp initialize variable
    //where as && is used to show or hide element

    return (
        <div>   
            Or
        </div>
    )
}
export default Or;