//button inside form2,name,email,phone,password,usestate,setname,onSubmit,handleSubmit,preventDefault,onChange,isMarried,gender=male,female and others and type is radio,country
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
const Form2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("john.namdul@gmail.com");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isMarried, setIsMarried] = useState(false); //for checkbox we use checked instead of value
  const [gender, setGender] = useState("female");
  const [country, setCountry] = useState("nepal");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      isMarried: isMarried,
      gender: gender,
      country: country,
    };
    console.log(data);
    /* toast.success("User created successfully"); */
    // toast.error("unable to create user")
    //yo haru package bata leko
    toast.error("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let countryList = [
    { value: "india", label: "India" },
    { value: "nepal", label: "Nepal" },
    { value: "china", label: "China" },
    { value: "japan", label: "Japan" },
    { value: "italy", label: "Italy" },
  ];
  let genderOption = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted successfully.");
      }
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              /*   onChange={(e)=>{
                     console.log(e.target.value)}} */
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="isMarried">Married:</label>
            <input
              type="checkbox"
              id="isMarried"
              checked={isMarried}
              onChange={(e) => {
                setIsMarried(e.target.checked);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="">Gender</label>

            {genderOption.map((item, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    value={item.value}
                    id={item.value}
                    checked={gender === item.value}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label htmlFor={item.value}>{item.label}</label>
                </div>
              );
            })}
            {/* <input
              type="radio"
              value="male"
              id="male"
              checked={gender === "male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            ></input>
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              value="female"
              id="female"
              checked={gender === "female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            ></input>
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              value="others"
              id="others"
              checked={gender === "others"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            ></input>
            <label htmlFor="others">others</label> */}
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select
              name=""
              id=" country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {/* <option value="india">India</option>
              <option value="nepal">Nepal</option>
              <option value="china">China</option>
              <option value="america">America</option> */}
              {countryList.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Form2;

/* 
for all 
value  (state value)
onChange=>e.target.value

checkbox
checked
onChange =>e.target.checked

radio
checked
onChange=>e.target.value

*/
