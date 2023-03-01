import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <header className="todo-app">

    <TodoList/>
      </header>
    </div>
  );
}

export default App;
