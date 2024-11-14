import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTodo, toggleComplete }) => {
  return (
    <ul className="w-full max-w-md mx-auto list-disc list-inside text-white">
      {tasks.map((task) => (
        <TodoItem 
          key={task.id} 
          task={task} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </ul>
  );
};

export default TodoList;

