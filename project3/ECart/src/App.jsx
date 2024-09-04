import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/product'
import { items } from './components/Data'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import SearchItem from './components/SearchItem'
const App = () => {
  const [data, setdata] = useState([...items])
  return (
    <>
    <Router>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Product items={data} />}/>
    <Route path="/product/:id" element={<ProductDetail />}/>
    <Route path="/search/:term" element={<SearchItem />}/>
    <Route path="/cart" element={<Cart/>}/> 
  </Routes>
   

    </Router>
  
    </>
 
  )
}

export default App