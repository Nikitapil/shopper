import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '../Alert/Alert'
import { CartItem } from '../CartItem/CartItem'
import { Template } from '../Template/Template'
import './cart.scss'
export const Cart = () => {
    const cartProducts = useSelector(state => state.products.cart)
    const [isAlert, setIsAlert] = useState(false)
    const totalprice = useMemo(() => {
        const counter = cartProducts.reduce((acc, item) => {
            return cartProducts.length ? acc+= +(item.price*item.count).toFixed(2) : 0
           }, 0)
           return counter.toFixed(2)
    }, [cartProducts])

    const order = () => {
        setIsAlert(true)
        setTimeout(() => {
            setIsAlert(false)
        }, 2500);
    }

    return (
        <Template
        content={
            <div className='container cart__container'>
                {isAlert && <Alert/>}
                <h2 className='cart__title'>Cart</h2>
                {cartProducts.length ? <ul className='cart__list'>
                    {cartProducts.map(product => {
                        return (
                            <CartItem key={product.id} product={product} />
                        )
                    })}
                </ul> : <h2>No products in cart</h2>}
                {totalprice > 0 && <div className='cart__total-price'>
                    <button className='cart__total-price-btn' onClick={order}>Order</button>
                    <p>Total price: <span>{totalprice}</span>$</p>
                    </div>}
            </div>
        }
        />
    )
}
