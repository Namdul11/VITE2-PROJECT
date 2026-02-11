import './App.css';
import About from './component/About';
import Address from './component/Address';
import And from './component/And';
import ClearLocalStorage from './component/LocalStorage/ClearLocalStorage';
import Combine from './component/Combine';
import EffectofData from './component/EffectOfData';
import Father from './component/Father';
import Filter from './component/Filter';
import GetLocalStorage from './component/LocalStorage/GetLocalStorage';
import JsonLearn from './component/JsonLearn';
import Json from './component/JsonLearn';
import LearnCss from './component/LearnCss';
import LearnUseState1 from './component/LearnUseState1';
import LearnUseState2 from './component/LearnUseState2';
import LearnUseState3 from './component/LearnUseState3';
import LearnUseState4 from './component/LearnUseState4';
import Map1 from './component/Map1';
import Mother from './component/Mother';
import OnClick from './component/OnClick';
import Or from './component/Or';
import Parent from './component/Parent';
import Reduce from './component/Reduce';
import SetLocalStorage from './component/LocalStorage/SetLocalStorage';
import ShowHide from './component/ShowHide';
import ShowImage from './component/ShowImage';
import TernaryOperator from './component/TernaryOperator';
import Toggle from './component/Toggle';
import SetSessionStorage from './component/sessionStorage/SetSessionStorage';
 

function App() {
  let name = "Namdul";
  let surname = "Lama";
  let address = "Kathmandu";
  let a = <p>hello</p>
  console.log("how you doin'");
  return (
  <div> 
   {/*  my name is {name} {surname} and I live in {address} */}
   {/*  the sum of 2 and 3 is {2 + 3} */}
   {/*     {a} */}
    {/* <About></About> */}
   {/*  <Address></Address> */}
   {/*      <EffectofData></EffectofData> */} 
   {/*      <Father name="pema" country="Nepal" age={72} hasCar={false} >
      <div>Father Info</div>
     </Father> */}
   {/*  <Mother name="Kasi" country="KTM" age={70}>
        <div>Mother Info</div>
      </Mother> 
    */}
      {/* <Parent assets={100000000}></Parent> */}
    {/* <TernaryOperator></TernaryOperator> */}
   {/* <And></And> */}
 {/* <Or></Or> */}

      {/* <LearnCss></LearnCss> */}
    {/*   <ShowImage ></ShowImage> */}
    {/* <OnClick></OnClick> */}
  {/*   <Map1></Map1> */}
{/*   <Filter></Filter> */}  
{/*  <Reduce></Reduce>*/}

{/* <Combine></Combine>  */}
{/* <LearnUseState1></LearnUseState1> */}
{/*  <LearnUseState2></LearnUseState2> */}
{/* <LearnUseState3></LearnUseState3> */}
{/* <LearnUseState4></LearnUseState4> */}
{/* <ShowHide></ShowHide> */}
{/* <Toggle></Toggle> */}
{/* <JsonLearn></JsonLearn> */}

{/* <SetLocalStorage></SetLocalStorage> */}
{/* <GetLocalStorage></GetLocalStorage> */}
{/* <ClearLocalStorage></ClearLocalStorage> */}

{/* <SetSessionStorage></SetSessionStorage> */}
 </div>
  )
}

export default App
/* 
html element are div, p, h1
jsx element are div, p, h1, etc.  
but they can also be components like <App></App> or <About></About>
components must start with capital letter
*/
