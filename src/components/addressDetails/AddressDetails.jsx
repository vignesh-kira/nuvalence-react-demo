import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import { selectAddressDetails, setSelectedAddress } from "./addressDetailsSlice";
import { ColumnWrapper, AvatarDetails, DataColumn } from "../styledComponents/StyledComponents";


const AddressDetails = () => {
	const { selectedAddress } = useSelector(selectAddressDetails);
	const dispatch = useDispatch();

	/**
	 * Renders address details of a person
	 */
	const renderAddressDetails = () => {
		const { name = {}, location = {}, picture, email, phone, dob, registered } = selectedAddress;
		const { title, first, last } = name;
		const { city, country, postcode, state, street } = location;

		return (
			<>
				<Card  className="col-md-12 p-2">
					<AvatarDetails variant="top" src={picture.large} />
					<Card.Body>
						<Card.Title>{`${title}. ${first} ${last}`}</Card.Title>
						<Row>
							<DataColumn>
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
							</DataColumn>
							<DataColumn>
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
							</DataColumn>
						</Row>
					</Card.Body>
				</Card>
			</>
		)
	}

	return (
		<Container>

			<Row>
				<ColumnWrapper>
					Address Details
					{
						/**
						 * Redirect to home when no address is selected/available
						 */
						!Object.keys(selectedAddress).length
							?(
								<Redirect to='/' />
							)
							: renderAddressDetails()
					}
					{/*Navigate back to home page*/}
					<Button
						size="sm mt-3"
						to={`/`}
						onClick={() => dispatch(setSelectedAddress({}))}
					>
						<FontAwesomeIcon icon={faArrowAltCircleLeft} />
						{ ` Back`}
					</Button>
				</ColumnWrapper>
			</Row>
		</Container>
	)
}

AddressDetails.defaultProps = {
	selectedAddress: {}
}
export default AddressDetails;
