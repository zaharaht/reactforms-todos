import React from 'react';
import { Link } from 'react-router-dom';
import './AddTodoPage.css';

export function AddTodoPage() {
  return (
    <div className='add-todo-page'>
      <div>Add TODO</div>
      <form className='add-todo-form'>
        <input placeholder='Enter your todo' />
        <Link className='add-todo-btn' to='/todolist'>Add</Link>
      </form>
    </div>
  );
}