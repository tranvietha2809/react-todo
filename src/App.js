import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './SingleTodo';

class App extends Component {
  constructor(){
    super();
    this.state={
      todos: [],
      currentTodo : ""
    };
  }
  onInputChange = e => {
    this.setState({currentTodo: e.target.value});
  }
  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({ todos: todosCopy, currentTodo: ""});
  }
  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i , 1);
    this.setState({ todos: todosCopy });
  }

  render(){
    let bulletTodo = this.state.todos.map((e, i) => {
      return(
        <SingleTodo todo = {e} delete = {() => this.deleteTodo(i)}/>
      )
    });
    return(
      <div>
        <input placeholder= "Enter Todo" value = {this.state.currentTodo} onChange= {this.onInputChange}/>
        <button onClick = {this.onClick}> Add! </button>
        <br/>
        { this. state.todos.length === 0 ? "No todos yet!" : <ul>{bulletTodo}</ul>}
      </div>
    )
  }
}

export default App;
