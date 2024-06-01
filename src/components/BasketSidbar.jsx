import React from 'react'
import { TbChecklist } from 'react-icons/tb'
import { FaHashtag } from 'react-icons/fa'
import { BsPatchCheck } from "react-icons/bs";

import style from './BasketSidbar.module.css';


function BasketSidbar({ state , clickHandler}) {
  return (
    <div className={style.sidebar}>
        <div>
            <TbChecklist />
            <p>Total:</p>
            <span>{state.total} $</span>
        </div>
        <div>
            <FaHashtag />
            <p>Qantity:</p>
            <span>{state.itemsCounter}</span>
        </div>
        <div>
            <BsPatchCheck />
            <p>Status:</p> 
            <span>{!state.checkout && 'Pending...' }</span>
        </div>
        <button onClick={() => clickHandler('CHECKOUT')}>CheckOut</button>
    </div>
  )
}

export default BasketSidbar