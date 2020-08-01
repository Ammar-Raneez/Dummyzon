import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'


function Header() {
    //useState value returns the state and a dispatch, we dont dspatch any action thru header so we no need dispatch returned
    const [{ basket }] = useStateValue();
    console.log(basket)

    return (
        <div className="header">
            {/*logo on the left, wrap logo within Link tags so that we can navigate*/}
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
            </Link>

            {/*search box*/}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/*3 links*/}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLine1">Hello Me</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>
                
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>
                </Link>

                {/*shopping basket icon and no of items in basket*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

            {/*basket icon with number*/}
        </div>
    )
}

export default Header
