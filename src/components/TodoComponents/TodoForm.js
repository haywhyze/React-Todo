import React from 'react';
import './Todo.css';

export default ({ todoName, handleChange, handleAdd, handleClear }) => (
  <form className='todoForm'>
    <input
      type='text'
      onChange={handleChange}
      value={todoName}
      className='todoInput'
      placeholder='..enter your todo here'
    />
    <button
      type='submit'
      onClick={handleAdd}
      className='addTodo'
    >Add Todo</button>
    <button 
      onClick={handleClear}
      className='clearCompleted'
    >
      Clear Completed
    </button>
  </form>
);