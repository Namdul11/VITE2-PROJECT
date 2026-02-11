
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const MainApp1 = () => {
    return (
        <div>   
        <Routes>
            {/* <Route path="/product" element={<div>Read all Products</div>}></Route>
            <Route path="/product/create" element={<div>product form</div>}></Route>
            <Route path="/product/:id" element={<div>read single product</div>}></Route>
            <Route path="/product/update/:id" element={<div> update product form</div>}></Route> */}
            <Route path="product">
                <Route index element={<div>Read all Products</div>}></Route>//index means yaha j xa tei
                <Route path="create" element={<div>product form</div>}></Route>
                <Route path=":id" element={<div>read single product</div>}></Route>
                <Route path="update/:id" element={<div> update product form</div>}></Route>
            </Route>
            <Route path="user">
                <Route index element={<div>read all user </div>}></Route>
                <Route path="create" element={<div>user form</div>}></Route>
                <Route path=":id" element={<div>read single user</div>}></Route>
                <Route path="update/:id" element={<div> update user form</div>}></Route>
            </Route>
        </Routes>
        </div>
    );
}
export default MainApp1;