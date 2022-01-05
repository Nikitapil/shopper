import { ADD_TOCART, CHANGE_CART_ITEM_COUNT, FETCH_CATEGORIES, FETCH_PRODUCTS, REDUCE_CART_ITEM_COUNT, REMOVE_FROM_CART, SET_CATEGORIES, SET_PRODUCTS, SHOW_CATEGORIES_LOADING, SHOW_LOADER } from "./types"

export const setProducts = (payload) => {
    return {
        type: SET_PRODUCTS,
        payload
    }
}
export const fetchProducts = (payload, query) => {
    return {
        type: FETCH_PRODUCTS,
        payload,
        query
    }
}

export const showLoader = (payload) => {
    return {
        type: SHOW_LOADER,
        payload
    }
}

export const setCategories = (payload) => {
    return {
        type: SET_CATEGORIES,
        payload
    }
}
export const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES
    }
}
export const showCategoriesLoading = (payload) => {
    return {
        type: SHOW_CATEGORIES_LOADING,
        payload
    }
}

export const addToCartAction = (payload) => {
    return {
        type: ADD_TOCART,
        payload
    }
}
export const changeCartItemCount = (payload) => {
    return {
        type: CHANGE_CART_ITEM_COUNT,
        payload
    }
}
export const reduceCartItemCount = (payload) => {
    return {
        type: REDUCE_CART_ITEM_COUNT,
        payload
    }
}
export const removeCartItemCount = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}