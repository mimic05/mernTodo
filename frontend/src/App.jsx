import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch todos from backend when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  // Function to add a new todo
  const addTodo = (taskText) => {
    axios.post('http://localhost:5000/api/todos', { text: taskText })
      .then((response) => {
        setTasks([...tasks, response.data]); // Add new task from backend response
        console.log('added item')
      })
      .catch((error) => console.error('Error adding todo:', error));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((error) => console.error('Error deleting todo:', error));
  };

  // Function to toggle completion status of a todo
  const toggleComplete = (id) => {
    const taskToUpdate = tasks.find((task) => task._id === id);
    axios.put(`http://localhost:5000/api/todos/${id}`, {
      completed: !taskToUpdate.completed,
    })
      .then((response) => {
        setTasks(tasks.map((task) => 
          task._id === id ? response.data : task
        ));
      })
      .catch((error) => console.error('Error updating todo:', error));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-custom-dark-blue-gray p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-zinc-50">Todo App</h1>
      </header>
      <AddTodoForm addTodo={addTodo} />
      <TodoList tasks={tasks} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
