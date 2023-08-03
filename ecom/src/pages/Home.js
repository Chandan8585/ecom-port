import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/ProductList'
import Cart from '../features/auth/cart/Cart.js'

const Home = () => {
  return (
    <div>

        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}

export default Home