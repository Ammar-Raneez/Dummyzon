import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from './firebase';
import { useStateValue } from './StateProvider';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //a react hook that keeps track of browser history
    const history = useHistory();

    const [{ user }, dispatch] = useStateValue();

    //login stuff
    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then( auth => {
                //update basket items on login                    
                //logged in, redirect to homepage
//*push the homepage link to history array, we push it rather than replacing cuz the regular action of browsers is 
//*that you can nagivate back and forth so many pages, we push homepage onto history so we can navigate to the homepage
                history.push("/");  //redirect only inside the then block: only if there's no errors

                db.collection(`${user?.email} basket`)
                .onSnapshot(snapshot => {
                    dispatch({
                        type: 'UPDATE_BASKET',
                        payload: snapshot.docs
                    })	
                })
            })
            .catch(error => alert(error))
    }

    //register stuff
    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then( auth => {
                //creates the new user, logs him in and redirects to homepage
                history.push("/");
            })
            .catch( error => alert(error))
    }

    return (
        <div className="login">
            <Link to="/">
                <img alt="Logo" className="login__logo" src="./logo.png" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to Dummyzon's conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login_registerButton">Create your Dummyzon Account</button>
            </div>
        </div>
    )
}

export default Login
