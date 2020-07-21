import React, { Component } from "react";
import TodoItem from '../todoItem/index'
export default class TodoList extends Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Tasks List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button 
        className="btn btn-danger btn-block text-uppercase mt-5" 
        onClick={handleClearList}
        >Clear List
        </button>
      </ul>
    );
  }
}
