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

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateditems = [...this.state.items, newItem];
    
      this.setState(
        {
          items: updateditems,
          item: "",
          id: uuidv4(),
          editItem: false,
        }
      );
    
  };

  handleDelete = (id) => {
    const filteredList = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredList,
    });
  };

  handleEdit = id => {
    const filteredList = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id)
    
    this.setState({
      items:filteredList,
      item:selectedItem.title,
      id:id,
      editItem:true
    })

  };

  handleClearList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Tasks maker</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
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
