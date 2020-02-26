import React, { Component } from 'react'

export default class TodoDetail extends Component {
    render() {
        const { todo } = this.props;
        return (
            <li>
                <p>{todo.task}</p>
            </li>
        )
    }
}
