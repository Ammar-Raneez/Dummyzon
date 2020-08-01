import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/checkout">
					<Header />
					<Checkout />
				</Route>

				<Route path="/login">
					
				</Route>
				
				{/*default and fallback for any route*/}
				<Route path="/">
					<Header />  
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
