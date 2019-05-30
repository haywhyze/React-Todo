// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

export default ({ todoList, handleComplete }) => (
  <div>
    <ul className="todoContainer">
      {
        todoList.map(todo => (
          <li 
            onClick={handleComplete} 
            id={todo.id} 
            key={todo.id}
            className={todo.completed ? 'todoItem completed' : 'todoItem'}
          >
            <Todo 
              todoName={todo.task} 
            />
          </li>
        ))
      }
    </ul>
  </div>
)