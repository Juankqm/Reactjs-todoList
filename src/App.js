import React from 'react';

//Importing Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
//importing components
import TodoList from './components/todoList/index'
//importing uuid
// import uuid from 'uuid'
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="row text-center">
        <div className="col-4 bg-danger">Hello</div>
        <div className="col-4 bg-info">Hello</div>
        <div className="col-4 bg-primary">Hello</div>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
