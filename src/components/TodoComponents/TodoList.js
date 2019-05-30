// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

export default ({ todoList }) => (
  <div>
    <ul>
      {
        todoList.map(todo => (
          <li key={todo.id}><Todo todoName={todo.task} /></li>
        ))
      }
    </ul>
  </div>
)