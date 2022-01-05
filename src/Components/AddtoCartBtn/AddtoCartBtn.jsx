import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, changeCartItemCount } from '../../redux/action'

export const AddtoCartBtn = ({product, cartbtn}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.products.cart)
    const addToCart = () => {
        const currentItem = cart.find((item) => item.id.toString() === product.id.toString())
        if (!currentItem) {
            dispatch(addToCartAction(product))
        }
        else {
            dispatch(changeCartItemCount(product.id))
        }
    }

    return (
        <button className='product__btn' onClick={addToCart}>
            {cartbtn ? '+' : 'Add to cart'}
        </button>
    )
}
