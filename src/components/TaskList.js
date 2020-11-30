import React from 'react';
import styled from 'styled-components';
import { TaskListItem } from './TaskListItem';

const Container = styled.div`
	margin-bottom: 20px;
`;

const ItemList = styled.ul`
	margin-top: 20px;
`;

export const TaskList = () => {

	return (
		<Container>
			<ItemList>
				<TaskListItem />
			</ItemList>
		</Container>
	);
}