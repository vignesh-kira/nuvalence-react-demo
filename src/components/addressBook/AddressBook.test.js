import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '../../../setup';
import AddressBook from "./AddressBook";

describe('Address Book component test', () => {

	render(
		<Router>
			<AddressBook />
		</Router>,
		{
			initialState: {
				selectedAddress: {},
				fetchUsersListStatus: 400,
				usersList: [],
				currentPage: 1
			}
		}
	);

	expect(screen.getByText('Unable to load the address book. Please try again later!')).toBeVisible();
});
