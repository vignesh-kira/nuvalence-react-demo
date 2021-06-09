import styled from 'styled-components';
import Col from 'react-bootstrap/Col'
import CardImg  from "react-bootstrap/CardImg";
import Row from 'react-bootstrap/Row'

export const AddressRow = styled(Row)`
    margin: 14px;
    background-color: #fcfcfc;
    padding: 14px;
    border-radius: 10px;
    min-width: initial;
    
    @media only screen and (min-width: 768px) {
        min-width: 550px;
    }
`;

export const ColumnWrapper = styled(Col)`
	display: flex;
    margin: auto;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 20px;
`;

export const AvatarThumbnail = styled.img`
	border-radius: 50%;
	height: 72px;
	width: 72px;
	margin: 14px;
	margin: auto;
`;

export const AvatarDetails = styled(CardImg) `
	width: fit-content;
    border-radius: 5px;
    text-align: center;
    margin: auto;
`;

export const DataColumn = styled(Col)`
	background-color: #dee2e6;
    border: 1px solid #d7d7d7;
    padding: 14px;
    margin: 14px;
`;

export const UserActionColumn = styled(Col)`
	display: flex;
    justify-content: center;
    align-items: center;
`;
