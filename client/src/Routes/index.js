import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
const Homepage = lazy(() => import('../Pages/Homepage/Homepage'))
const Products = lazy(() => import('../Pages/Products/Products'))

export const AllRoutes = () => {
    return (
        <>
            <Suspense fallback={<div>..Loading</div>}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="products" element={<Products />} />
                </Routes>
            </Suspense>
 </>)
}



