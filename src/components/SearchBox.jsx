import React from 'react'
import styles from './SearchBox.module.css'
import { ImSearch } from "react-icons/im";

import { creatQueryObject } from '../helpers/help'

function SearchBox({ setQuery , search ,  setSearch}) {

    
  const searchHandler = () => {
    setQuery( query => (creatQueryObject( query , {search} )))
  }

  return (
    <div className={styles.search}>
    <input 
    type='text' 
    placeholder='Search...'
    value={search}
    onChange={e => setSearch(e.target.value.toLowerCase().trim())}
    />
    <button onClick={searchHandler} >
    <ImSearch />
    </button>
  </div>
  )
}

export default SearchBox