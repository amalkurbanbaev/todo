import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { TaskCreator } from './components/TaskCreator';
import { TaskList } from './components/TaskList';
import { Actions } from './components/Actions';
import { useTasks } from './components/hooks/useTasks';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Main = styled.div`
  min-width: 1000px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 100px;
  background-color: #d6b6e2;
  border-radius: 7px;
`;

const App = () => {

  const myTasks = useTasks([]);

  return (
    <Container>
      <GlobalStyles whiteColor />
      <Main>
        <TaskCreator {...myTasks} />
        <hr />
        <TaskList />
        <hr />
        <Actions />
      </Main>
      
    </Container>
  );
}
  
export default App;
