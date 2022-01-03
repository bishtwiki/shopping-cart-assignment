import React from "react"
import Sidebar from "../../components/Sidebar/Sidebar.component"
import ProductsFetching from "../../components/Products/ProductsFetching.component"
const Products=()=>{
    return (
    <>
   
    <div className="container">
        <div className="row">
<div className="col-ls-custom">
<Sidebar/>
</div>
<div className="col-ls-custom9">
    <ProductsFetching/>
    </div>
    </div>
    </div>
  
     
 </>)
}
export default Products