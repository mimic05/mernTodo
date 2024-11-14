import React, { useState } from 'react';
import PlusIcon from '../assets/Plus.jsx';

const AddTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input type="text" value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="text-white p-2 border  bg-cutom-dark-light-gray rounded-s-full pl-20"
      />
      <button
        type="submit"
        className="px-8 bg-transparent border text-white rounded-r-full hover:bg-gray-600 rounded-xl
        flex items-center justify-start
        border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        <PlusIcon className="text-white" />
      </button>
    </form>
  );
};

export default AddTodoForm;
