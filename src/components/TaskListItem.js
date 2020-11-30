import React from 'react';
import styled from 'styled-components';
import trashImage from './images/trash.svg';
import editImage from './images/edit.svg';

const ItemStyled = styled.li`
	display: flex;
	align-items: center;
`;

const ItemName = styled.span`
	font-size: 24px;
	background-color: #fff;
	border-radius: 7px;
	padding: 10px 15px;
	width: 100%;

	&:last-child {
		margin-bottom: 0px;
	}
`;

const TrashButton = styled.button`
	width: 35px;
	height: 30px;
	background-image: url(${trashImage});
	background-color: transparent;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
	border: none;
	margin-left: 20px;

	&:focus {
		border: none;
		outline: none;
	}
`;

const EditButton = styled(TrashButton)`
	background-image: url(${editImage});
	margin-right: 0;

`;

export const TaskListItem = () => {

	const editItem = () => {
		console.log('go edit')
	}
	
	const deleteItem  = () => {
		console.log('go delete')
	}

	return (
		<ItemStyled>
			<ItemName> Wake up and go running </ItemName>
			<EditButton onClick={() => editItem()} />
			<TrashButton onClick={() => deleteItem()} />			
		</ItemStyled>
	);
}