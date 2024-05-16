import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styles from './Loader.module.css'
function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines 
        width='100px' 
        heigth='100px' 
        strokeColor='#fe5d42'
        strockWidth='3' />
    </div>
  )
}

export default Loader