import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navigation from './customer/components/Navigation/Navigation'
//import { Navigation } from './customer/components/Navigation/navigation.js';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';


import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation/>
        <div>
          {/*<Product/> */}
          
           <HomePage/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
