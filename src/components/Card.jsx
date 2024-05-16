import React from 'react'
import { Link } from 'react-router-dom';

import { TbListDetails } from 'react-icons/tb'
import { TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from '../helpers/help';

import styles from './Card.module.css'
import { useCart } from '../context/CartContext';
import { MdDeleteOutline } from 'react-icons/md';

function Card({data}) {
    const {id , image , title , price} = data;

    const [ state , dispatch] = useCart();
    console.log(state)

    const quantity = productQuantity( state , id );
    console.log(quantity)

    const clilckHandler = (type) => {
      dispatch({ type , payload: data})
    }

  return (
    <div className={styles.card}>
        <img src={image} alt={title} style={{width: '150px' }}/>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
                <TbListDetails />
            </Link>
            <div>
              {
               quantity == 1 && (<button onClick={() => clilckHandler('REMOVE_ITEM')}>
               <MdDeleteOutline/>
             </button>) 
              }
            {
             quantity > 1 && (<button onClick={() => clilckHandler('DECREASE')}>
             -
           </button>)
            }
            {!!quantity &&<span>{quantity}</span>}
              { 
              quantity == 0 ? 
               (<button onClick={() => clilckHandler('ADD_ITEM')}>
            <TbShoppingBagCheck />
            </button>)
            :  (<button onClick={() => clilckHandler('INCREASE')}>
            +
          </button>) }
            
            </div>
        </div>
    </div>
  )
}

export default Card