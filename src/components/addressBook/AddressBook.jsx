import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination'
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import {fetchUsersAsync, selectAddress} from "./addressBookSlice";
import {Content, StyledColumn, AddressRow, Avatar} from "./StyledComponents";


const AddressBook = () => {
	const { usersList, fetchUsersListStatus, currentPage } = useSelector(selectAddress);
	const dispatch = useDispatch();
	// const handleGetUsers = async() => {
	// 	try {
	// 		const { data: { results, info } } = await getUsersList();
	// 	} catch (error) {
	// 		console.log(error.response.status)
	// 	}
	// };

	useEffect(() => {
		dispatch(fetchUsersAsync())
	}, [dispatch]);

	const renderUsers = () => (
		usersList.map(({ name, picture, email }, index) => {
			const { first, last, title} = name;
			return (
				<AddressRow key={index}>
					<Avatar src={picture.medium} />
					<Content>
						{/*<h5>{user.name}</h5>*/}
						<h5>
							{`${first} ${last}`}
						</h5>
						<p>{email}</p>
					</Content>
					<div>
						<Button size="sm">
							{`Details `}
							<FontAwesomeIcon icon={faArrowAltCircleRight} />
						</Button>
					</div>
				</AddressRow>
			)
		})
	);

	return (
		<Container>
			<Row>
				<StyledColumn>
					{
						fetchUsersListStatus === 200 && (
							renderUsers()
						)
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
				</StyledColumn>

			</Row>

		</Container>
	)
}

export default AddressBook;
