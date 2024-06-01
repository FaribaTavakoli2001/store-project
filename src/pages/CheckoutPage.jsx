import React from 'react'
import BasketCard from '../components/BasketCard';
import { useCart } from '../context/CartContext'
import BasketSidbar from '../components/BasketSidbar';

import styles from './CheckoutPage.module.css';

function CheckoutPage() {
  const [state , dispatch] = useCart();

  const clickHandler = (type , payload) => dispatch({type , payload})
  
  if (!state.itemsCounter) {
    return (
      <span> !سبد خرید شما خالی است</span>
    )
  }
  
  return (
    <div className={styles.container}>
      <BasketSidbar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {state.selectedItems.map(product => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage