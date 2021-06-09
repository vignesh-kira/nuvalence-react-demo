import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Redirect} from "react-router-dom";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import {selectAddressDetails, setSelectedAddress} from "./addressDetailsSlice";
import {StyledColumn, AvatarDetails} from "../styledComponents/StyledComponents";


const AddressDetails = () => {
	const { selectedAddress } = useSelector(selectAddressDetails);
	const dispatch = useDispatch();

	const renderAddressDetails = () => {
		const { name, location, picture, email, phone, dob, registered } = selectedAddress;
		const { title, first, last } = name;
		const {
			 city,
			country,
			postcode,
			state,
			street,
		} = location;
		return (
			<>
				<Card  className="col-md-12 p-2">
					<AvatarDetails variant="top" src={picture.large} />
					<Card.Body>
						<Card.Title>{`${title}. ${first} ${last}`}</Card.Title>
						<div>
							<Table striped bordered hover>
								<tbody>
								<tr>
									<td>
										<p>
											<FontAwesomeIcon icon={faLocationArrow} />
										</p>
										<p>
											{`${street.number} ${street.name},`}
										</p>
										<p>
											{`${city}, ${state},`}
										</p>
										<p>
											{`${country},`}
										</p>
										<p>
											{postcode}
										</p>
									</td>
									<td>
										<p>
											<FontAwesomeIcon icon={faUser} />
										</p>
										<p>
											{phone}
										</p>
										<p>
											{}
											{`Date of birth: `}
											{` `}
											{
												moment.utc(dob.date).format("LL")
											}
										</p>
										<p>
											{email}
										</p>
										<p>
											{`Registered: `}
											{` `}
											{
												moment.utc(registered.date).format("LL")
											}
										</p>
									</td>
								</tr>
								</tbody>
							</Table>
						</div>
						<div>

						</div>
					</Card.Body>
				</Card>
			</>
		)
	}

	return (
		<Container>

			<Row>
				<StyledColumn>
					Address Details
					{
						!Object.keys(selectedAddress).length
							?(
								<Redirect to='/' />
							)
							: renderAddressDetails()
					}
					<Button
						size="sm mt-3"
						to={`/`}
						onClick={() => dispatch(setSelectedAddress({}))}
					>
						<FontAwesomeIcon icon={faArrowAltCircleLeft} />
						{ ` Back`}
					</Button>
				</StyledColumn>
			</Row>
		</Container>
	)
}

export default AddressDetails;
