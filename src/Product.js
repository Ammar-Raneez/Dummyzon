import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
    const [dispatch] = useStateValue();

    //add item to basket
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map( _ => <p><span role="img" aria-label="Rating-stars">⭐</span></p>)}
                </div>
            </div>
            <img src={image} alt="Product" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )/*create an array of size rating, fill it, map through the array size, and for each display a start*/
}


export default Product
