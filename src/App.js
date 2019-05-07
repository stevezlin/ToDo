import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


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

  // Add Todo
  addTodo =(title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  
  render() {
    //assigning variable to property
 

    return (
      
    <Router>

    <div className="App">
    <div className="container">
    <Header/>
    
    <Route exact path="/" render={props => (
  //Single Route index page of Todos/AddTodo

    <React.Fragment>
    
    <AddTodo addTodo={this.addTodo} />

    <Todos todos={this.state.todos}
     taskComplete={this.taskComplete}
     delTodo={this.delTodo} />
   </React.Fragment>
    )}/>


   <Route path="/about" component={About}/>

    </div>
    </div>
      
    </Router>
    );
  }
}

export default App;
