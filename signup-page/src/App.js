import react, {useState} from "react";
import validator from "validator";
import './App.css';

function App(){
  const [errorThrower, setErrorThrower] = useState('');
  const [emailError, setEmailError]= useState(true)
  function EmailCheck(e){
 
  var userEmail= e.target.value;
  if (validator.isEmail(userEmail)) {
    setEmailError(true)
  } else {
    setErrorThrower('Enter valid Email!')
    setEmailError(false)
  }
  
}

 
  return(

<div>
 <h1>Sign Up</h1>
 <form>
   <label>
     First Name
   </label>
   <input 
    type="text"
    placeholder="Enter First Name"
   />
   <label>
     Last Name
   </label>
   <input 
    type="text"
    placeholder="Enter Last Name"
    />
   <label>
     Email Account
   </label>
   <input className={emailError? 'validMail':'invalidMail'}
    
    type="email"
    placeholder="Enter Email Address"
    onChange={(e)=>EmailCheck(e)}
    />
     <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError? '': errorThrower}</span>
   <label>
     Password
   </label>
   <input 
    type="password"
    placeholder="Enter Password"
    />
 </form>
 <button> Sign up</button>
</div>
);


}





export default App;