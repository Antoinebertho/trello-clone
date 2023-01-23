import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Column } from './components/Column';
import { AppContainer } from './styles';
import { Card } from './components/Card';

function App() {
  return (
    <AppContainer>
      <Column text='To Do'>
        <Card text='Learn Typescript'/>
      </Column>
      <Column text='In Progress'>
        <Card text='Learn Typescript'/>
      </Column>
      <Column text='Done'>
        <Card text='Learn Typescript'/>
      </Column>
    </AppContainer>
  )
}

export default App;
