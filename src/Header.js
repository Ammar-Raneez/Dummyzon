import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header() {
    //useState value returns the state and a dispatch, we dont dspatch any action thru header so we no need dispatch returned
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut()
            dispatch({
                type: 'RESET_BASKET'    //reset basket when you logout
            })
        }
    }

    return (
        <div className="header">
            {/*logo on the left, wrap logo within Link tags so that we can navigate*/}
            <Link to="/">
                {/* <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" /> */}
                <h2 className="header__logo">Dummyzon🛒</h2>
            </Link>

            {/*search box*/}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/*3 links*/}
            <div className="header__nav">
            {/*redirect to login page only if there's no current user, else log them out*/}
                <Link to={!user && `/login`} className="header__link">
                    <div onClick={login} className="header__options">
                        <span className="header__optionLine1">
                            {`Hello ${user ? user?.email.substring(0, user.email.indexOf("@"))  + "!" : "Stranger!"}`}
                        </span>
                        <span className="header__optionLine2">{user? 'Sign Out' : 'Sign In/ Register'}</span>
                    </div>
                </Link>
                
                {/* <Link to="/" className="header__link">
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
                </Link> */}

                {/*shopping basket icon and no of items in basket*/}
{/*if there's a user, direct to checkout, else to login, this is for when you click the shopping icon directly from header*/}
                <Link to={user? "/checkout" : "/login"} className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
