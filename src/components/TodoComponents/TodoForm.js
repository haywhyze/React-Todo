import React from 'react';
import './Todo.css';

export default ({ todoName, handleChange, handleAdd, handleClear }) => (
  <form>
    <input
      type='text'
      onChange={handleChange}
      value={todoName}
    />
    <input
      type='submit'
      value='Add Todo'
      onClick={handleAdd}
    />
    <button onClick={handleClear}>Clear Completed</button>
  </form>
);