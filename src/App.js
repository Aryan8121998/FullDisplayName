import { useState } from "react";

function App() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const[fullName,setFullName]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
if(firstName&&lastName){
  setFullName(`${firstName} ${lastName}`)
}

  }
  return (
    <div>
  <h1>Full Name Display</h1>
  <form onSubmit={handleSubmit}>
    <label>First Name:</label>
    <input type="text" name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required>
    </input>
    <br/>
    <label>Last Name:</label>
    <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} required></input>
    <br/>
    <button type="submit">Submit</button>
  </form>
  
{fullName ? <p>Full Name: {fullName}</p> : ""}
    </div>
  );
}

export default App;
