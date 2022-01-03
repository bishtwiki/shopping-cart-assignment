import React from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import { AllRoutes } from './Routes';
function App() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <AllRoutes />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
