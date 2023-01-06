import React,{useState} from 'react'
import SignupForm from './SignupForm'
import SignupFormSuccess from './SignupFormSuccess'
const Form = () => {
const [formIsSumitted, setFormIsSumitted] = useState(false);
const submitForm=()=>{

  setFormIsSumitted(true);
}

  return  <div>{!formIsSumitted ? <SignupForm submitForm={submitForm} /> :<SignupFormSuccess/> }
    </div>;


{/* 
<SignupForm/>
<SignupFormSuccess/> */}

  
}

export default Form