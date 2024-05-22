import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoItem({ todo, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);
  const { removeTodo, updateTodo, toggleComplete } = useContext(TodoContext);

  const handleUpdate = () => {
    updateTodo(index, { text: newText, dueDate: newDueDate });
    setIsEditing(false);
  };

  return (
    <li className="bg-white shadow-md rounded p-4 flex justify-between items-center">
      {isEditing ? (
        <div className="flex flex-col md:flex-row items-center w-full">
          <input
            type="text"
            className="flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            type="date"
            className="flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded mb-2 md:mb-0 md:mr-2">
            Update
          </button>
        </div>
      ) : (
        <div className="flex-grow" onClick={() => toggleComplete(index)}>
          <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
          <span className="block text-sm text-gray-500">Due: {todo.dueDate}</span>
        </div>
      )}
      <div className="flex">
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 rounded mr-2">
          Edit
        </button>
        <button onClick={() => removeTodo(index)} className="bg-red-500 text-white p-2 rounded">
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
