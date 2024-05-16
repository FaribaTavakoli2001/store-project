import React, { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductContext'

import styles from './ProductsPage.module.css'
import Card from '../components/Card'
import Loader from '../components/Loader'
import {  filterProducts, getInitialQuery, searchProducs } from '../helpers/help';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SearchBox from '../components/SearchBox';

function ProductsPage() {
  const [ search , setSearch ] = useState('')
  const [ displayd , setDisplayd ] = useState([])
  const [ query , setQuery ] = useState({})

  const [ searchParams , setSearchParams ] = useSearchParams()

  const products = useProducts()
  // console.log(products)
  
  

  useEffect( () => {
    setQuery(getInitialQuery( searchParams ))
    setDisplayd(products)
  }, [products])
   
  useEffect( () => {
    setSearchParams(query)
    setSearch( query.search || '')
    let finalProduct = searchProducs(products , query.search )
    finalProduct = filterProducts(finalProduct , query.category)
    setDisplayd(finalProduct)

  } , [query])

  return (
    <>
    <SearchBox setQuery={setQuery} search={search} setSearch={setSearch}  />
    <div className={styles.container}>
      <div className={styles.product}>
        {!displayd.length && <Loader />}
        {displayd.map(p => <Card key={p.id} data={p}/>)}
      </div>
      <Sidebar query={query} setQuery={setQuery} />
</div>
    </>
  )
}

export default ProductsPage