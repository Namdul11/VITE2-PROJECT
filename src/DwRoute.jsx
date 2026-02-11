import { Route, Routes } from "react-router-dom"
import About from "./component/About"
import Contact from "./component/Contact"
import Product from "./component/Product"
import Login from "./component/Login"
import PageNotFound from "./component/PageNotFound"


 const DwRoute = () => {
    return (
        <div>
       <Routes>
                <Route path="/about" element={<About></About>} />
                <Route path="/contact/" element={<Contact></Contact>} />
                <Route path="/product/:id1/laptop/:id2" element={<Product></Product>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="*" element={<PageNotFound></PageNotFound>} />

            </Routes>
            
        </div>
    )
}

export default DwRoute
/* 


give page based on url

/about => About Page
/contact => Contact Page
/product => Product Page

*/