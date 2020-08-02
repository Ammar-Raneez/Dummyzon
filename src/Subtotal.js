import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            {/*price*/}
            <CurrencyFormat decimalScale={2} value={getBasketTotal(basket)}
                displayType={"text"} thousandSeparator={true} prefix={"$"}
                renderText={value => (
                    <React.Fragment>
                        <p>
                            Subtotal {basket.length} items: <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </React.Fragment>
                )}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
