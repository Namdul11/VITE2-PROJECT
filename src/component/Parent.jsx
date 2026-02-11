

import Child from "./Child";

const Parent = ({assets}) => {
    return (
        <div>
            This is Parent Component
            <Child assets={assets}></Child>
        </div>
    )
}
export default Parent;