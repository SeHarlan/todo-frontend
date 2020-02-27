import React, { Component } from 'react'

export default class TodoDetail extends Component {
    render() {
        const { todo } = this.props;
        
        const done = (!todo.complete) ? { textDecorationLine: "none" } : {textDecorationLine: "line-through" }
        return (
            <li >
                <p onClick={this.props.toggleComplete} id={`DetailId_${todo.id}`} style={done}>
                    {todo.task}
                </p>
            </li>
        )
    }
}
