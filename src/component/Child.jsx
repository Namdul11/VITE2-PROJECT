import Grandchild from "./grandchild";

const Child = ({ assets }) => {
    return (
        <div>
            This is Child Component.
            <Grandchild assets={assets}></Grandchild>
        </div>
    )
}
export default Child;