import React from "react";
import Signup from "../../components/Login/Signup.component";
const SignupPage =()=>{

return (<>
<div className="container">
    <div className="row">

<div className="col-ls-6">
    <div className="group">
    <div className="form-content">
    <h1>Signup</h1>
    <p>We do not share your personal details with anyone</p>
    </div>
    </div>
    </div>
    <div className="col-ls-6">
        <div className="form-bottom">
        <Signup/>
        </div>
    
    </div>
    </div>
    </div>
    

</>)
    



}

export default SignupPage