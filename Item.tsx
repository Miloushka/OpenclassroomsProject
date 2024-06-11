import React from 'react';

interface TodoItemProps {
  todo: string;
  done: boolean;
  index: number;
  deleteTodo: (index: number) => void;
  toggleDone: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, done, index, deleteTodo, toggleDone }) => {
  return (
    <div className="todo flex items-center justify-between">
      <label className="flex items-center">
        <input 
          type="checkbox" 
          checked={done} 
          className="mr-2" 
          onChange={toggleDone} 
        /> 
        <span className={`text-lg ${done ? 'line-through' : ''}`}>{todo}</span> 
      </label>
      <button onClick={() => deleteTodo(index)} className="text-xl">🗑️</button>
    </div>
  );
};

export default TodoItem;