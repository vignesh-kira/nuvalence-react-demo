import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination'
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { fetchUsersAsync, selectAddressBook } from "./addressBookSlice";
import { AddressRow, AvatarThumbnail, ColumnWrapper, UserActionColumn } from "../styledComponents/StyledComponents";
import { selectAddressDetails, setSelectedAddress } from "../addressDetails/addressDetailsSlice";


const AddressBook = () => {
	const { usersList, fetchUsersListStatus, currentPage } = useSelector(selectAddressBook);
	const { selectedAddress } = useSelector(selectAddressDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!fetchUsersListStatus) {
			dispatch(fetchUsersAsync())
		}
	}, [dispatch, fetchUsersListStatus]);

	const renderUsersList = () => (
		usersList.map((user, index) => {
			const { name, picture, email } = user;
			const { first, last, title} = name;
			return (
				<AddressRow key={index}>
					<Col md={3}>
						<AvatarThumbnail src={picture.medium} />
					</Col>
					<Col md={6}>
						<h5>
							{`${title}. ${first} ${last}`}
						</h5>
						<p>{email}</p>
					</Col>
					<UserActionColumn md={3}>
						<Button
							size="sm"
							onClick={() => dispatch(setSelectedAddress(user))}
						>
							{`Details `}
							<FontAwesomeIcon icon={faArrowAltCircleRight} />
						</Button>
					</UserActionColumn>
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
						renderUsersList()
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
				/**
				 * Redirect to Details page when address is selected
				 */
				!!Object.keys(selectedAddress).length && (
					<Redirect to='/details' />
				)
			}
			{
				fetchUsersListStatus && (
					<Row>
						<ColumnWrapper>
							{
								renderAddressBook()
							}
						</ColumnWrapper>
					</Row>
				)
			}

		</Container>
	)
}

AddressBook.defaultProps = {
	usersList: [],
	fetchUsersListStatus: null,
	currentPage: 1
}

export default AddressBook;
