import React from "react"
import HomepageProduct from "../HomepageProduct/HomepageProduct"
import { HocWrapper } from '../HOC/WithData.js'

const HomepageLayout = ({ data }) => {

   return (
     
      <>
     
         {
            data.filter(sortval => sortval.enabled === true).map(({ id, key, ...otherProps }) => (
               <HomepageProduct key={id} btntext={key} {...otherProps} />
            ))}
           
      </>
   )
}
export default HocWrapper(HomepageLayout, 'http://localhost:5000/categories')