import styled from 'styled-components';
import Col from 'react-bootstrap/Col'
import {CardImg} from "react-bootstrap";

export const AddressRow = styled.div`
    display: flex;
    margin: 14px;
    background-color: #fcfcfc;
    padding: 14px;
    border-radius: 10px;
    min-width: 500px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const StyledColumn = styled(Col)`
	display: flex;
    margin: auto;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 20px;
`;

export const Avatar = styled.img`
	border-radius: 50%;
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
