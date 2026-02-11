
const Mother = ({name, country,age, children}) => {
  return (
    <div>
        {children}
        <p>{name}</p>
        <p>{country}</p>
        <p>{age}</p>
    </div>
  );
};

export default Mother;