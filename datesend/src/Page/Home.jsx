import React, { useState } from 'react'
import "../Style/Home.css"
const Home = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [mobileNumber, setMobileNumber] = useState("");
 const [message, setMessage] = useState("");

 let handleSubmit = async (e) => {
   e.preventDefault();
   try {
     let res = await fetch("https://httpbin.org/post", {
       method: "POST",
       body: JSON.stringify({
         name: name,
         email: email,
         mobileNumber: mobileNumber,
       }),
     });

     if (res.status === 200) {
       setName("");
       setEmail("");
       setMessage("User created successfully");
     } else {
       setMessage("Some error occured");
     }
   } catch (err) {
     console.log(err);
   }
 };
  return (
    <>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="user_input"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="user_input"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="user_input"
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button className="user_btn" type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
    </>
  )
}

export default Home
