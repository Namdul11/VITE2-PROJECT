/* 
const Father = (props) => {
     console.log(props.name,props.country,props.age)
   return (
     <div>
        Father
     </div>
   )
 }

 export default Father; */


const Father = ({ name, country, age, hasCar, Children }) => {
  return (
    <div>
      {Children}
      <p>{name}</p>
      <p>{country}</p>
      <p>{age}</p>
    </div>
  );
};

export default Father;