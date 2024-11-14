import CompleteIcon from '../assets/Complete.jsx';
import DeleteIcon from '../assets/Delete.jsx';
import CookingIcon from '../assets/Cooking.jsx';


const TodoItem = ({ task, deleteTodo, toggleComplete }) => {
    return (
        <li className="flex items-center justify-between bg-cutom-dark-light-gray p-3 mb-2 shadow-md shadow-light-gray rounded-xl">
            <div>
                <CookingIcon className={`h-4 w-4 mr-4 ${task.completed ? 'text-green-400' : 'text-white'}`} />
            </div>
            <span
                className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
                {task.text}
            </span>
            <div className="flex space-x-2">
                <button onClick={() => toggleComplete(task._id)}
                    className={`p-1 rounded px-4 ${task.completed ? 'bg-transparent rounded-full px-2' : 'bg-transparent text-white hover:text-green-300 rounded-full px-2'
                        }`}>

                    <CompleteIcon className="text-white rounded-full" />

                </button>
                <button onClick={() => deleteTodo(task._id)}
                    className="bg-transparent text-white p-1 hover:text-red-500 rounded-xl px-4"
                >
                    <DeleteIcon className="text-white" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
