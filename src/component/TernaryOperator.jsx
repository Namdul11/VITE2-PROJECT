const TernaryOperator = () => {
    let age = 19;
    let gender = "male";
    return (
        <div>       
            {age>=18 ? <p>can watch movie.</p> :null}
            {
            age >= 18 ? <p>You are eligible to vote.</p> : <p>You are not eligible to vote.</p>
            }
            {gender === "male" ? <p>You are male.</p> :gender === "female" ? <p>You are female.</p> : <p>You are other.</p>}
            
       </div>
    )
};
export default TernaryOperator;