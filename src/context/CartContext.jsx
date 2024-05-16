import React, { createContext, useContext, useReducer } from 'react'
import { sumProducts } from '../helpers/help';


const initialSatate = {
    selectedItems : [],
    ItemsCounter : 0,
    total : 0,
    checkout : false,
};

const Cartcontext = createContext();

const reducer = (state , action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if(!state.selectedItems.find(item => item.id == action.payload.id)){
                state.selectedItems.push({...action.payload , quantity : 1 });
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout : false,
            }
        case 'REMOVE_ITEM' :
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id
                );
                return {
                    ...state,
                    selectedItems:[...newSelectedItems],
                    ...sumProducts(newSelectedItems),

                }
        case 'INCREASE' :
            const increaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id );
            state.selectedItems[increaseIndex].quantity++;
            return {
                ...state,
                ...sumProducts(state.selectedItems)
            };
        case 'DECREASE' :
            const decreaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id);
            state.selectedItems[decreaseIndex].quantity--;
            return {
                ...state,
                ...sumProducts(state.selectedItems)
            }
        case 'CHECKOUT' :
            return {
                selectedItems:[],
                ItemsCounter: 0,
                total: 0,
                checkout: true,
            }
        default:
          throw new Error('Invalid Action');
    }
};



function CartProvider({ children }) {
    const [ state , dispatch ] = useReducer( reducer , initialSatate)
  return (
    <Cartcontext.Provider value={{state , dispatch}}>
        {children}
    </Cartcontext.Provider>
  )
}

const useCart = () => {
    const { state , dispatch } = useContext(Cartcontext);
    return [ state , dispatch ];
}

export default CartProvider
export { useCart }