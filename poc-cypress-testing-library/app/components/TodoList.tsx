import { useState, useRef } from 'react';
import type { TodoItem, TodoFilter } from '../types/todo';

export function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<TodoFilter>('all');
  const nextIdRef = useRef(1);

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() === '') return;
    
    const newTodo: TodoItem = {
      id: `todo-${nextIdRef.current++}`,
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Remove todo
  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed status
  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Todo List
      </h1>
      
      {/* Add new todo */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add
        </button>
      </div>

      {/* Filter buttons */}
      {todos.length > 0 && (
        <div className="flex gap-2 mb-4 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({todos.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'active'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Active ({activeTodosCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Completed ({completedTodosCount})
          </button>
        </div>
      )}

      {/* Todo list */}
      {filteredTodos.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {todos.length === 0 
            ? "No todos yet. Add one above!" 
            : `No ${filter} todos.`
          }
        </div>
      ) : (
        <ul className="space-y-2 mb-4">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span
                className={`flex-1 ${
                  todo.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
              <span className="text-sm text-gray-400">
                {todo.createdAt.toISOString().split('T')[0]}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Clear completed button */}
      {completedTodosCount > 0 && (
        <div className="flex justify-center">
          <button
            onClick={clearCompleted}
            className="px-4 py-2 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Clear Completed ({completedTodosCount})
          </button>
        </div>
      )}
    </div>
  );
}