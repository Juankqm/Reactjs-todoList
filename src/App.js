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
    try {
      this.setState(
        {
          items: updateditems,
          item: "",
          id: uuidv4(),
          editItem: false,
        },
        () => console.log(this.state)
      );
      alert("Item Addes successfully");
    } catch (e) {
      alert(`Error ${e}`);
    }
  };

  handleDelete = (id) => {
    const filteredList = this.state.items.filter((item) => item.id !== id);
    const answer = window.confirm("Are you sure to delete this item?");

    this.setState({
      items: filteredList,
    });
  };

  handleEdit = (id) => {
    console.log("handle Edit");
  };

  handleClearList = () => {
    console.log("Clear List");
    this.setState({
      items: [],
    });
  };
  handleClick = () => {
    console.log("You've clicked on me");
  };

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
