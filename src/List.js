import React, { Component } from 'react';
import { getList, insertTodo } from './todo-api.js';

import TodoDetail from './TodoDetail.js';

export default class List extends Component {
    state = {
        list: [],
        input: ''
    }

    async componentDidMount() {
        const data = await getList();
        this.setState( { list: data.body })
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value})
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const newTodo = { task: this.state.input, complete: false}
        const returnedTodo = await insertTodo(newTodo);

        console.log(returnedTodo.body)
        
        const newList = [...this.state.list, returnedTodo.body]
        
        this.setState({ list: newList})
    }
    render() {
        const listNode = this.state.list.map(todo => 
            <TodoDetail todo={todo} key={`listId${todo.id}`} />
        )
        return (
            <div>
                <form>
                    <input type="text" require onChange={this.handleInput} value={this.state.input}/>
                    <button onClick={this.handleSubmit} >Submit</button>
                </form>
                <ul className="list">
                    {listNode}
                </ul>
            </div>
        )
    }
}
