import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AddressDetails from "../components/addressDetails/AddressDetails";
import AddressBook from "../components/addressBook/AddressBook";

const ComponentRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/details">
				<AddressDetails />
			</Route>
			<Route exact path="/">
				<AddressBook />
			</Route>
		</Switch>
	</Router>
);

export default ComponentRouter;
