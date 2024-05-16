import React from 'react'
import styles from './Sidebar.module.css'

import { FaListUl } from "react-icons/fa";
import { creatQueryObject } from '../helpers/help'
import { categories } from '../constant/list';
    


function Sidebar({ query ,  setQuery  }) {

    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
    
        if ( tagName !== 'LI' ) return;
        setQuery( query => (creatQueryObject( query , {category} )))
      }


  return (
    <div className={styles.sidebar}>
      <div>
      <FaListUl />
      <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        { categories.map(item => 
        <li
        className={item.type.toLowerCase() == query.category ? styles.selected : null  } 
        key={item.id}>{item.type}</li>)}
      </ul>
    </div>
    
  )
}

export default Sidebar