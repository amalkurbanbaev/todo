import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const Heading = styled.h1`
	text-align: center;
	font-size: 54px;
	margin: 25px 0;
`;

const TaskInput = styled.input`
	padding: 5px 17px;
	border: none;
	border-radius: 5px;
	width: 60%;
	height: 65px;
	font-size: 36px;

	&:focus {
		outline: none;
		border: none;
	}
	&::placeholder {
		color: #ccc;
		opacity: 0.6;
	}
`;

const AddButton = styled.button`
	width: 40%;
	background-color: #a9e2ea;
	border-radius: 5px;
	margin-left: 30px;
	transition: 100ms;
	font-size: 30px;
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

export const TaskCreator = ({tasks, setTasks}) => {

	function handleTaskInput(e) {
		return e.target.value;
	}

	function addToTaskList() {
		setTasks(handleTaskInput)
	}

	console.log(tasks);

	return (
		<>
			<Heading> To Do App </Heading>
			<Container>
				<TaskInput onChange={(e) => setTasks([e.target.value])} placeholder="enter you task.." />
				<AddButton onClick={() => addToTaskList()}> Add to Task List </AddButton>
			</Container>
		</>
	);
}

TaskCreator.propTypes = {
	tasks: PropTypes.array,
	setTasks: PropTypes.func
}