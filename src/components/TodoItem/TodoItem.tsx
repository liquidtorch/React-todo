import React from 'react';
import ITodo from '../../models/ITodo';
import './TodoItem.css';

export interface ITodoItemProps {
  todo: ITodo;
  toggleDone: () => void;
}

const TodoItem = (props: ITodoItemProps) => (
  <li>
    <input
      type="checkbox"
      name="isDone"
      checked={props.todo.isDone}
      onClick={() => props.toggleDone()}
    />
    <span className={props.todo.isDone ? 'done' : ''}>{props.todo.title}</span>
  </li>
);

export default TodoItem;
