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
     
     <select className="sidebar-dropdown">
    {   data.filter(sortval => sortval.enabled === true).map(({ id, name }) => (
               <option key={id} >{name}</option>
            ))}
     </select>
     </div>
      
    </>)

}

export default HocWrapper(Sidebar,'http://localhost:5000/categories')