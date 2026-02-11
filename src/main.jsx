import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import Form1 from "./component/Form1.jsx";
import Form2 from "./component/Form2.jsx";
import MainApp1 from "./MainApp1.jsx";
import MainApp from "./MainApp.jsx";
import Form3 from "./component/Form3.jsx";
import { ToastContainer } from "react-toastify";
import Form4 from "./component/Form4.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer></ToastContainer>
    {/* <App /> */}
    {/* <MainApp></MainApp> */}
    {/* <MainApp1></MainApp1> */}

    {/* <Form1></Form1> */}
    <Form2></Form2>
    {/* <Form3></Form3> */}
{/*     <Form4></Form4> */}
  </BrowserRouter>,
);
/* 
to work with react router dom
we must wrap our app in <BrowserRouter> */
