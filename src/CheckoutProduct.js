import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    //you dont have to include both basket and dispatch, include only what is necessary
    const [dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id  //sending id of item to reducer so that we can distinguish and delete
        })
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="item" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map( _ => <p><span role="img" aria-label="Rating-stars">⭐</span></p>)}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
