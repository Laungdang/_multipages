import { useEffect, useState } from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'



import Layout from './layouts/Layout/Layout'

import Home from './pages/Home/Home'
import Components from './pages/Components/Components'
import Todo from './pages/Todo/Todo'
import Calculator from './pages/Calculator/Calculator'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'

import { fetchProducts } from './data/product'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'


//Rounter  มี2ตัว
//Rounter  BrowserRouter
//Rounter  HashRouter

//อันนี้ลืม
//MemoryRouter

//Rounter  BrowserRouter
//เวลาเราจะใช้มันจะไปตรวจสอบ Host : localhost:3000/<path> ใช้กับ nginx

//Rounter  HashRouter
//location:5174/#/<path> ข้อดี compatable ใช้ได้ดีกับserverเก่าๆ
//app --> Layout --> Navbar
//tab 


function App() {

  const [token, setToken] = useState('')
  const [role, setRole] = useState('')


  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => setProducts(fetchProducts()), [])


  useEffect(() => console.log(products), [products])


  if (token ==='') {
  return (<Login setToken={setToken} setRole={setRole}/>)
  }else{
  
      return (
        <div className='app-container'>
          <HashRouter>
            <Routes>
    
              {/* ต้นทางชื่อ Layout */}
              <Route element={<Layout products={products} carts={carts} setToken={setToken} role={role}/>}>
              {/* ทางข้างใน ใน Layout */}
              <Route path={'/'} element={<Home />} />
              <Route path={'/home'} element={<Home />} />
              <Route path={'/calculator'} element={<Calculator />} />
              <Route path={'/todo'} element={<Todo />} />
              <Route path={'/components'} element={<Components />} />
              <Route path={'/product'} element={<Product products={products} carts={carts} setCarts={setCarts}/>} />
              <Route path={'/cart'} element={<Cart carts={carts} setCarts={setCarts} />} />
             
              
              
    
              </Route>
            </Routes>
          </HashRouter>
          
        </div>  
      
      )
    
  }


}

export default App
