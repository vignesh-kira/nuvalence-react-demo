import styled from 'styled-components';
import Col from 'react-bootstrap/Col'


export const Content = styled.div`
`;

export const AddressRow = styled.div`
    display: flex;
    margin: 14px;
    background-color: #d5d1d1;
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
