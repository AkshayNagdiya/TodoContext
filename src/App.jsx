import React from 'react';
import TodoList from './TodoList';
import AddTodo from './Addtodo';
import { TodoProvider } from './TodoContext';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-4">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
