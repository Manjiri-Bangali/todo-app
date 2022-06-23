import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField/inputField';
import styled, { createGlobalStyle } from 'styled-components';
import Task from './components/task/task';
import TaskModel from './models/taskModel';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(178, 222, 252);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [taskname, setTaskname] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskModel[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if(taskname){
      setTaskList([...taskList, {id: Date.now(), todo: taskname, isCompleted: false}]);
      setTaskname("");
    }
      
  }

  return (
    <AppStyle className="app">
        <GlobalStyle></GlobalStyle>
        <header>
          <h1>Taskify</h1>
        </header>
        <main>
          <InputField taskname={taskname} setTaskname={setTaskname} addTask={addTask}></InputField>
          <ul>
            {
              taskList.map(task => (
                <li key={task.id}>
                  <Task {...task}></Task>
                </li>
              ))
            }
          </ul>
          
        </main>
    </AppStyle>
  );
}

export default App;
