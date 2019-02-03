import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ITodo from './models/ITodo';

class App extends Component<{}, {todos: ITodo[]}> {
  public state = {
    todos: [
      { title: `I'm a todo!`, isDone: false },
      { title: `I'm a todo too!`, isDone: false },
      { title: `No I'm a todo!`, isDone: false },
      { title: 'Am I a todo?', isDone: true },
    ] as ITodo[],
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Todo app</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  private toggleDone = (i: number) => (
    (): void => {
      this.setState(({todos}) => {
        const updated: ITodo = { ...todos[i], isDone: !todos[i].isDone };
        const newTodos: ITodo[] = [...todos.slice(0, i), updated, ...todos.slice(i + 1)];
        return { todos: newTodos };
      });
    }
  )
}

export default App;
