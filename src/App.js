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

    this.setState({
      todoList: this.state.todoList.concat(newTodo),
      todoName: '',
    })
  }

  handleClear = (event) => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.completed === false),
    })
  }

  handleComplete = (event) => {
    const id = Number(event.target.id);
    this.setState(state => {
      return {todoList: state.todoList.map(todo => {
        if (todo.id === id)
          todo.completed = !todo.completed
        return todo;
      })}
    });
  }

  render() {
    return (
      <div className='container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={this.state.todoList}
          handleComplete={this.handleComplete}
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
