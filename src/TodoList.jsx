import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
