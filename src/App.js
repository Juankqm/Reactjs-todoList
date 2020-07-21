import React, { Component } from "react";
//Importing Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
//importing components
import TodoInput from "./components/todoInput/index";
import TodoList from "./components/todoList/index";
//importing uuid
import { v4 as uuidv4 } from "uuid";
//importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

handleChange = (e) =>{
  this.setState({
    item: e.target.value
  })

}
handleSubmit = (e) =>{
  e.preventDefault()
   const newItem = {
     id:this.state.id,
     title:this.state.item
   }
   const updateditems = [...this.state.items,newItem]

   this.setState({
      items:updateditems,
      item:'',
      id:uuidv4(),
      editItem:false
   },()=>console.log(this.state))
 
 
}

handleDelete = (id) =>{
  console.log("handle Delete");
}

handleEdit = (id) =>{
  console.log("handle Edit");
}

handleClearList= () =>{
  console.log("Clear List");
}
handleClick = () =>{
  console.log("You've clicked on me");
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput  
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.handleEdit}
              handleClick={this.handleClick}
            />
               <h3 className="text-capitalize text-center">Todo List</h3>
            <TodoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
