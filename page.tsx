"use client";

import React, { useState } from 'react';
import TodoItem from '../component/Item';
import AddTodoForm from '../component/Addtodoform';

interface Todo {
  todo: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Liste initialement vide
  const [activeTab, setActiveTab] = useState<'all' | 'todo' | 'done'>('all');

  const addTodo = (todo: string) => {
    setTodos([...todos, { todo, done: false }]);
  };

  const toggleDone = (index: number) => {
    const updatedTodos = todos.map((item, idx) =>
      idx === index ? { ...item, done: !item.done } : item
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'all') return true;
    if (activeTab === 'todo') return !todo.done;
    if (activeTab === 'done') return todo.done;
    return true;
  });

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <div className="tabs">
        <button onClick={() => setActiveTab('all')} className={activeTab === 'all' ? 'active-tab' : ''}>Toutes les tâches</button>
        <button onClick={() => setActiveTab('todo')} className={activeTab === 'todo' ? 'active-tab' : ''}>À faire</button>
        <button onClick={() => setActiveTab('done')} className={activeTab === 'done' ? 'active-tab' : ''}>Faites</button>
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.todo}
            done={todo.done}
            index={index}
            deleteTodo={() => deleteTodo(index)}
            toggleDone={() => toggleDone(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;