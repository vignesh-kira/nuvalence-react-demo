import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '../../../setup';
import AddressDetails from "./AddressDetails";

describe('Address Details component test', () => {

	render(
		<Router>
			<AddressDetails />
		</Router>,
		{
			initialState: {
				selectedAddress: {
					name: {
						title: "Mr",
						first: 'Jack',
						last: 'Sparrow'
					},
					location: {
						city: 'NY',
						country: 'USA',
						postcode: 'Random',
						state: 'NY',
						street: 'Baker Street',
					},
					picture: {
						thumbnail:"",
						large: ""
					},
					email: 'test@gmail.com',
					phone: '5142345678',
					dob: '30 June 2010',
					registered: false
				}
			}
		}
	);

	expect(screen.getByText('Mr Jack Sparrow')).toBeVisible();
	expect(screen.getByText('Baker Street')).toBeVisible();
	expect(screen.getByText('test@gmail.com')).toBeVisible();
});
