import React from 'react'
import { shortenText } from '../helpers/help'
import { MdDeleteOutline } from 'react-icons/md';

import styles from './BasketCard.module.css';
function BasketCard({ data , clickHandler}) {
    const {image , title , quantity , price} = data;
  return (
    <div className={styles.card}>
        <img src={ image} alt={ title} />
        <div>
        <p>{shortenText(title)}</p>
        <p>{ price } $ </p>
        </div>
        <div className={styles.action}>
            { quantity == 1 && (
                <button onClick={() => clickHandler('REMOVE_ITEM' , data)} >
                    <MdDeleteOutline />
                </button>
            )}
            { quantity > 1 && (
                <button onClick={() => clickHandler('DECREASE' , data)}> - </button>
            )}
            <span>
                { quantity }
            </span>
            <button onClick={() => clickHandler('INCREASE' , data)}> + </button>
        </div>
    </div>
  )
}

export default BasketCard