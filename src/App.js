import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  
  state = { 

    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },

      {
        id: 2,
        title: 'Dinner with family',
        completed: false
      },

      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }
  

  // Toggle complete 
  taskComplete = (id) => {
    this.setState ({ todos: this.state.todos.map (todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
        }
        return todo;
    }) });
    
  }

  // Delete button
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
      !==id)] });
  }
  
  render() {
    //assigning variable to property
 

    return (
    <div className="App">
    <div className="container">
    <Header/>
    <AddTodo/>
    <Todos todos={this.state.todos}
     taskComplete={this.taskComplete}
     delTodo={this.delTodo} />
    
    
    </div>
    </div>
    );
  }
}

export default App;
