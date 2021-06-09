import React from 'react';

import logo from './logo.svg';
import './App.css';
import ComponentRouter from "./contants/routes";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/*<Counter />*/}
				<h2>
					Nuvalence Address Book Demo
				</h2>
			</header>
			<ComponentRouter />
		</div>
	);
}

export default App;
