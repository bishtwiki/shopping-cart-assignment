import React from "react"
import './custombutton.style.scss'
const Custombutton=({children,...otherprops})=>
{
    return <>

<button className="custom-button" {...otherprops}>
{children}
</button>
    </>

}

export default Custombutton