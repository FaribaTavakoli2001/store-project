import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CheckoutPage from './pages/CheckoutPage'
import DetailesPage from './pages/DetailesPage'
import PageNotFound from './pages/404'
import ProductProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import Layout from './layout/Layout'


function App() {
  return (
    <>
    <CartProvider>
    <ProductProvider>
      <Layout>
    <Routes>
    <Route path='/products' element={<ProductsPage />} />
    <Route path='/' element={<Navigate to='/products' replace />} />
    <Route path='/products/:id' element={<DetailesPage />} />
    <Route path='/checkout' element={<CheckoutPage />}/>
    <Route path='/*' element={<PageNotFound />} />
    </Routes>
    </Layout>
    </ProductProvider>
    </CartProvider>
    </>
  )
}

export default App