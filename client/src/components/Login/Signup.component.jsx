import React, { useState } from 'react'
import Forminput from '../Login/Forminput.component'
import Custombutton from '../CustomButton/customButton.component';
import { auth, createUserProfileDocument } from '../../firebase.util';

const Signup =()=>{

    const[inputField,setInputField]=useState({firstname:'',lastname:'',email:'',password:'',cnfpassword:''});

 const  changeHandler=(event)=>{
     const {name,value} =event.target;
     setInputField((prevState) => ({
        ...prevState,
        [name]: value,
      }));

   }  

   const handleSubmit = async event => {
    event.preventDefault();
    
    
    const {firstname,lastname,email,password,cnfpassword}=inputField;
    
     let displayName =firstname.concat(' ',lastname)
   
     if (inputField.password !== inputField.cnfpassword) {
      alert("passwords don't match");
      return;
    }
    try{
      const {user}=await auth.createUserWithEmailAndPassword(email,password);
      await createUserProfileDocument(user,{displayName })
      setInputField({firstname:'',lastname:'',email:'',password:'',cnfpassword:''})

    }
    catch(error){
console.log('error getting',error.message)
    }

        }

    return (
  <>
    <div className='signin'>
    <form  onSubmit={handleSubmit}>
    
    <Forminput 
     type="text"
     name="firstname"
     value={inputField.firstname} 
     changeHandler={changeHandler}
     label="First Name"
     required />

    <Forminput 
     type="text"
     name="lastname"
     value={inputField.lastname} 
     changeHandler={changeHandler}
     label="Last Name"
     required />
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

     <Forminput 
     name="cnfpassword"
     type="password"
     value={inputField.cnfpassword} 
     changeHandler={changeHandler}
     label="Confirm Password"
     required />
     <Custombutton type='submit'> Signup </Custombutton>
     
     </form>
   </div>
    
    </>
    )


}

export default Signup