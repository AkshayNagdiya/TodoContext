import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

function AddTodo() {
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value,
      completed: false,
      dueDate: dueDate
    });
    setValue('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mb-4">
      <input
        type="text"
        className="w-full md:w-auto flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="date"
        className="w-full md:w-auto flex-grow border border-gray-300 p-2 rounded mb-2 md:mb-0 md:mr-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
