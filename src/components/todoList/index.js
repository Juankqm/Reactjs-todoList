import React, { Component } from 'react'
import TodoItem from '../todoItem/index'
import TodoInput from '../todoInput/index'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>Hi, from todo list</h1>
                <TodoItem/> 
                <TodoInput/>
            </div>
        )
    }
}
