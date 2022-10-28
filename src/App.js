import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './components/Todo';
import EditableTodo from './components/EditableTodo';
import TodosProperty from './components/TodosProperty';
import Dropdown from './components/Dropdown';
import DeleteAllChecked from './components/DeleteAllChecked';
import './App.css';

function App() {
const [todos, setTodos] = useState([])
const [filtered, setFiltered] = useState([])
const [todo, setTodo] = useState('')
const [editableTodo, setEditableTodo] = useState(null)

const addTodo = () => {
  setTodos([...todos, {id: uuid(), text: todo, isCompeted: false, isChecked: false}])
  setTodo('')
}

const deleteTodo = (id) => {
  if (window.confirm('are you sure you want to delete this todo?')) {
    setTodos(todos.filter(todo => todo.id !== id))
    setFiltered(filtered.filter(todo => todo.id !== id))
  }
}

const updateTodo = (updated) => {
  setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo))
  setEditableTodo(null)
}

const editTodo = (id) => {
  setEditableTodo(todos.find(todo => todo.id === id))
}

const toggleCompeteTodo = (id) => {
  setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompeted: !todo.isCompeted}: todo))
  setFiltered(filtered.map((todo) => todo.id === id ? {...todo, isCompeted: !todo.isCompeted}: todo))
}

const toggleCheckedTodo = (id) => {
  setTodos(todos.map((todo) => todo.id === id ? {...todo, isChecked: !todo.isChecked}: todo))
}

const deleteCheckedTodos = () => {
  if (window.confirm('are you sure you want to delete selected todos?')) {
    setTodos(todos.filter(todo => !todo.isChecked))
  }
}

const checkAllTodos = () => {
  setTodos(todos.map((todo) => ({...todo, isChecked: true }) ))
}

const filteringTodos = (category) => {
  if (category === 'all') setFiltered([])
  if (category === 'completed') setFiltered(todos.filter((todo) => todo.isCompeted))
  if (category === 'active') setFiltered(todos.filter((todo) => !todo.isCompeted))
}

  return (
    <div className="App">
      <div className='container my-4'>
        <div className='row' data-row="Add Todo">
          <div className="col-sm-10">
            <input type="text"
            value={todo}
            className="form-control"
            placeholder="Todo Title"
            onChange={(e) => {setTodo(e.target.value)}} />
          </div>
          <div className="col-sm-2">
            <button 
              className="btn btn-primary w-100" 
              onClick={addTodo}
              disabled={todo.trim().length >= 3 ? '' : 'disabled'}
              >
              <i className="bi bi-plus-square-fill"></i>
            </button>
          </div>
        </div>
        <div className="row my-4" data-row="Show Todo">
          <div className='col-12 mb-4'>
            { todos.length > 0 && <Dropdown filteringTodos={filteringTodos} />}
          </div>
          <div className='col-12'>
            <ul className="list-group" id="todo-list">
            {
            filtered.length 
            ? filtered.map((todo) =>  
              <Todo 
              todo={todo} 
              key={todo.id} 
              toggleCompeteTodo={toggleCompeteTodo} 
              toggleCheckedTodo={toggleCheckedTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo} />)
            : todos.map((todo) =>  
              <Todo 
              todo={todo} 
              key={todo.id} 
              toggleCompeteTodo={toggleCompeteTodo} 
              toggleCheckedTodo={toggleCheckedTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo} />)
              }
            </ul>
          </div>
        </div>
        <div className="row my-4" data-row="Show Property">
          <div className='col-md-6 d-flex justify-content-start'>
            {todos.length > 0 && 
            <DeleteAllChecked 
            deleteCheckedTodos={deleteCheckedTodos} 
            checkAllTodos={checkAllTodos}
            checkedLength={todos.filter((todo) => todo.isChecked).length}
            />}
          </div>
          <div className='col-md-6 d-flex justify-content-end'>
            {todos.length > 0 && <TodosProperty todos={todos} /> }
          </div>
        </div>
        <div className="row my-4" data-row="Editable Todo">
          <div className='col-12'>
            {editableTodo && <EditableTodo todo={editableTodo} updateTodo={updateTodo} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



