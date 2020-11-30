import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const ButtonSave = styled.button`
	padding: 10px 60px;
	background-color: #a9e2ea;
	border-radius: 5px;
	margin-left: 30px;
	transition: 100ms;
	font-size: 24px;
	font-weight: 400;
	border: 2px solid black;

	&:hover {
		transition: 100ms;
		background-color: #cbe3e7;
	}
	&:active {
		transition: 100ms;
		background-color: #91dbe5;
	}	
	&:focus {
		outline: none;
	}	
`;
const ButtonReset = styled(ButtonSave)`
	background-color: #eaa9bd;

	&:hover {
		transition: 100ms;
		background-color: #ebcad4;
	}
	&:active {
		transition: 100ms;
		background-color: #e793ad;
	}
`;

export const Actions = () => {

	return (
		<Container>
			<ButtonSave> SAVE AS FILE </ButtonSave>
			<ButtonReset> CLEAR </ButtonReset>
		</Container>
	);
}