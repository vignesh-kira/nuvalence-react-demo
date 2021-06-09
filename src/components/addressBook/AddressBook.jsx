import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination'
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import {fetchUsersAsync, selectAddress} from "./addressBookSlice";
import {StyledColumn, AddressRow, Avatar} from "../styledComponents/StyledComponents";
import {selectAddressDetails, setSelectedAddress} from "../addressDetails/addressDetailsSlice";


const AddressBook = () => {
	const { usersList, fetchUsersListStatus, currentPage } = useSelector(selectAddress);
	const { selectedAddress } = useSelector(selectAddressDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!fetchUsersListStatus) {
			dispatch(fetchUsersAsync())
		}
	}, [dispatch, fetchUsersListStatus]);

	const renderUsers = () => (
		usersList.map((user, index) => {
			const { name, picture, email } = user;
			const { first, last, title} = name;
			return (
				<AddressRow key={index}>
					<Avatar src={picture.medium} />
					<div>
						<h5>
							{`${title}. ${first} ${last}`}
						</h5>
						<p>{email}</p>
					</div>
					<div>
						<Button
							size="sm"
							onClick={() => dispatch(setSelectedAddress(user))}
						>
							{`Details `}
							<FontAwesomeIcon icon={faArrowAltCircleRight} />
						</Button>
					</div>
				</AddressRow>
			)
		})
	);

	const renderAlert = () => (
		<Alert variant="danger">
			Unable to load the address book. Please try again later!
		</Alert>
	);

	const renderAddressBook = () => (
		fetchUsersListStatus === 200
			? (
				<>
					{
						renderUsers()
					}
					<Pagination>
						<Pagination.Prev
							disabled={currentPage === 1}
							onClick={() => dispatch(fetchUsersAsync(currentPage - 1))}
						>
							<FontAwesomeIcon icon={faAngleLeft} />
							{` Prev`}
						</Pagination.Prev>
						<Pagination.Next onClick={() => dispatch(fetchUsersAsync(currentPage + 1))} >
							{`Next `}
							<FontAwesomeIcon icon={faAngleRight} />
						</Pagination.Next>
					</Pagination>
				</>
			)
			: renderAlert()
	)

	return (
		<Container>
			{
				!!Object.keys(selectedAddress).length && (
					<Redirect to='/details' />
				)
			}
			<Row>
				<StyledColumn>
					{
						fetchUsersListStatus && renderAddressBook()
					}
				</StyledColumn>
			</Row>
		</Container>
	)
}

export default AddressBook;
