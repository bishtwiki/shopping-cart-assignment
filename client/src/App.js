import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer.component';
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';

import {AllRoutes} from './Routes';


function App() {
  return (
    <>
    <ErrorBoundary>
    <AllRoutes/>
    <Footer></Footer>
    </ErrorBoundary>
   
    </>
    
  );
}

export default App;
