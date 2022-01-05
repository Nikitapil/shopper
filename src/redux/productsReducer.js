import { ADD_TOCART, CHANGE_CART_ITEM_COUNT, REDUCE_CART_ITEM_COUNT, REMOVE_FROM_CART, SET_CATEGORIES, SET_PRODUCTS } from "./types"

const initialState = {
    products: [],
    categories: [],
    cart: []
}

export const productsReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload}
        case SET_CATEGORIES: 
        return {...state, categories: action.payload}
        case ADD_TOCART: 
        return {...state, cart: [...state.cart, {...action.payload, count: 1}]}
        case CHANGE_CART_ITEM_COUNT: 
        return {...state, cart: state.cart.map((item) => {
            if (item.id === action.payload) {
                item.count++
            }
            return item
        })}
        case REDUCE_CART_ITEM_COUNT: 
        return {...state, cart: state.cart.map((item) => {
            if (item.id === action.payload) {
                item.count--
            }
            return item
        })}
        case REMOVE_FROM_CART: 
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
        default: return state
    }
}