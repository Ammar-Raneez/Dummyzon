import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useHistory } from 'react-router-dom';

function Checkout() {
    //dispatch is needed only when you manupilate the state
    const [{ user, basket }] = useStateValue();
    const history = useHistory();

    return (user?.email ? (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" alt="ad"
                    src="https://images.squarespace-cdn.com/content/v1/521e598ae4b0f54b00dd4439/1478267144484-WAPBGJE0HW60GB8P7DDU/ke17ZwdGBToddI8pDm48kCaP7z82N4XVi1rV7EtRCDlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwKMes2JL7f6rkwSBMT27_qGqPy2lsbmAgdub7KMVakpdW2CabdffzmCJf0j_-fL7s/Microsoft+badge+200px+height.png" 
                />
                {basket?.length === 0 ? (
                    <div>
                        <h1>Your Shopping Basket is Empty</h1>
                        <p>
                            You have no items in your basket. To buy one or more items, click on
                            "Add to Basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1 className="checkout__title">Your Shopping Basket</h1>

                        {/*list out all of the checkout products*/}
                        {basket?.map(item => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image}
                                price={item.price} rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket?.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    ) : (
        <div>
            {history.push('/')}
        </div>
        )
    )
}

export default Checkout
