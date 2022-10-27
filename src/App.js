import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './components/Todo';
import EditableTodo from './components/EditableTodo';
import TodosProperty from './components/TodosProperty';
import DeleteAllChecked from './components/DeleteAllChecked';
import './App.css';

function App() {
const [todos, setTodos] = useState([])
const [todo, setTodo] = useState('')
const [editableTodo, setEditableTodo] = useState(null)

const addTodo = () => {
  setTodos([...todos, {id: uuid(), text: todo, isCompeted: false, isChecked: false}])
  setTodo('')
}

const deleteTodo = (id) => {
  if (window.confirm('are you sure you want to delete this todo?')) {
    setTodos(todos.filter(todo => todo.id !== id))
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
            <button className="btn btn-primary w-100" onClick={addTodo}>
              <i className="bi bi-plus-square-fill"></i>
            </button>
          </div>
        </div>
        <div className="row my-4" data-row="Show Todo">
          <ul className="list-group" id="todo-list">
            {todos.map((todo) =>  
              <Todo 
              todo={todo} 
              key={todo.id} 
              toggleCompeteTodo={toggleCompeteTodo} 
              toggleCheckedTodo={toggleCheckedTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo} />)}
          </ul>
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



