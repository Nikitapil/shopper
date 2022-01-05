import React from 'react'
import { useDispatch } from 'react-redux'
import { reduceCartItemCount, removeCartItemCount } from '../../redux/action'
import { AddtoCartBtn } from '../AddtoCartBtn/AddtoCartBtn'

export const CartItem = ({product}) => {
    const dispatch = useDispatch()
    const removeFromCart = () => {
        if (product.count > 1) {
            dispatch(reduceCartItemCount(product.id))
        }
        else {
            dispatch(removeCartItemCount(product.id))
        }
    }

    return (
        <li className='cart__item'>
        <div className='cart__item-img'><img src={product.image} alt={product.title} /></div>
        <div className='cart__item-body'>
            <h3 className='cart__item-title'>{product.title}</h3>
            <p className='cart__item-price'>Price: <span>{product.price}</span>$</p>
            <p className='cart__item-count'>Count: <span>{product.count}</span></p>
        </div>
        <div className='cart__item-tools'>
            <p className='cart__item-total'>Total: <span>{(product.count * product.price).toFixed(2)}</span>$</p>
            <div className='cart__item-tools__btns'>
                <button className='cart__item-less product__btn' onClick={removeFromCart}>-</button>
                <AddtoCartBtn product={product} cartbtn/>
            </div>
        </div>
    </li>
    )
}
