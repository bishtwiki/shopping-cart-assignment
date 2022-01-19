import React, { lazy, Suspense } from 'react';
import { Route, Routes ,Navigate  } from 'react-router-dom'
import { auth } from '../firebase.util'
const Homepage = lazy(() => import('../Pages/Homepage/Homepage'))
const Products = lazy(() => import('../Pages/Products/Products'))
const Login =     lazy(()=> import('../Pages/Login/Login'))
const Signup = lazy(()=>import('../Pages/Login/Signup'))

export const AllRoutes = () => {
 

  return (
        <>
            <Suspense fallback={<div>..Loading</div>}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="products" element={<Products />} />
                    <Route  path="signin" element={auth.currentUser ?<Navigate to="/" /> :<Login/>}  />
                    <Route path="signup" element={auth.currentUser ?<Navigate to="/" /> :<Signup/>} />

                </Routes>
            </Suspense>
 </>)
}



