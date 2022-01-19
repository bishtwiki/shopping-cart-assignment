import React, { useState } from 'react'
import Forminput from '../Login/Forminput.component'
import Custombutton from '../CustomButton/customButton.component';
import { auth } from '../../firebase.util';

const Signin =()=>{

    const[inputField,setInputField]=useState({email:'',password:''});

 const  changeHandler=(event)=>{
     const {name,value} =event.target;
     setInputField((prevState) => ({
        ...prevState,
        [name]: value,
      }));

   }  

   const handleSubmit = async event => {
    event.preventDefault();
const {email,password} =inputField
try {
  await auth.signInWithEmailAndPassword(email,password);
  setInputField({email:'',password:''})

}
catch (error){
  console.log('error in login',error.message)

}
  };

    return (
  <>
    <div className='signin'>
    <form onSubmit={handleSubmit}>
    
    <Forminput 
     type="text"
     name="email"
     value={inputField.email} 
     changeHandler={changeHandler}
     label="Email"
     required />

     <Forminput 
     name="password"
     type="password"
     value={inputField.password} 
     changeHandler={changeHandler}
     label="Password"
     required />
     <Custombutton type='submit'> Login </Custombutton>
     
     </form>
   </div>
    
    </>
    )


}

export default Signin