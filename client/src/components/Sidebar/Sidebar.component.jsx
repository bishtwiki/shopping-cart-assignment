import React from "react"
import './Sidebar.style.scss'
import { HocWrapper } from '../HOC/WithData.js'
const Sidebar=({data})=>{
   
    return (
    <>
    <div className="sidebar">
    <ul>
    {   data.filter(sortval => sortval.enabled === true).map(({ id, name }) => (
               <li key={id} >{name}</li>
            ))}
     </ul>
    </div>
       
    </>)

}

export default HocWrapper(Sidebar,'http://localhost:5000/categories')