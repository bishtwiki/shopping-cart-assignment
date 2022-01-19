import React from "react";
import Signin from "../../components/Login/Signin.component";
const Login =()=>{

return (<>
<div className="container">
    <div className="row">

<div className="col-ls-6">
    <div className="group">
    <div className="form-content">
    <h1>Login</h1>
    <p>Get access to your Orders, Whistlist and Recommendations</p>
    </div>
    </div>
    </div>
    <div className="col-ls-6">
        <div className="form-bottom">
        <Signin/>
        </div>
    
    </div>
    </div>
    </div>
    

</>)
    



}

export default Login