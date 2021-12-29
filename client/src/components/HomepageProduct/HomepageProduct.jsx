import React from 'react'
import HomepageList from "../HomepageList/HomepageList.component"
import './HomepageProduct.style.scss'

const HomepageProduct =({...otherprops})=>{
  

  return (
      <>
      
      <div className='product-list-image'>
        
      <HomepageList {...otherprops}  />
     
      </div>
      </>
  )  

}

export default HomepageProduct