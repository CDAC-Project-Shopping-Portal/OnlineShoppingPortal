import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navigation from './customer/components/Navigation/Navigation'
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from './customer/pages/auth/Login';
import Register from './customer/pages/auth/Register';
// import Navigation from './customer/components/Navigation/Navigation'
 


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  return (
    <>
      <div>
        <Navigation />
        <div>
          {/* <HomePage /> */}
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<HomePage />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
