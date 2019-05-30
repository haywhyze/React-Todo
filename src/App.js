import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const intitialTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);

    this.state = {
      todoList: intitialTodo,
      todoName: '',
    }
  }
  
  handleChange = (event) => {
    this.setState({
      todoName: event.target.value,
    })
  }

  handleAdd = (event) => {
    event.preventDefault();
    if (!this.state.todoName) return
    const newTodo = {
      id: Date.now(),
      task: this.state.todoName,
      completed: false,
    }

    const newTodoList = this.state.todoList.concat(newTodo);

    this.setState({
      todoList: newTodoList,
      todoName: '',
    })
  }

  handleClear = (event) => {
    event.preventDefault();
    
    const newTodoList = this.state.todoList.filter(todo => todo.completed === false);

    this.setState({
      todoList: newTodoList,
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={this.state.todoList} 
        />
        <TodoForm 
          todoName={this.state.todoName} 
          handleChange={this.handleChange}
          handleClear={this.handleClear}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
