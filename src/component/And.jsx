const And = () => {
    let age = 1;
    return (
        <div>
            {/* {age>18? <p>You are eligible to vote.</p> :null} */}
            {
            age > 18 && <p>this is para1</p>
            }
            {true && true && <p>this is para2</p>
            }   
            {
                true && false && <p>this is para3</p>
            }

        </div>
    )
}
export default And;