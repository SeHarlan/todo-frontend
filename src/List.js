import React, { Component } from 'react';
import { getList, insertTodo, toggleDBItem } from './todo-api.js';

import TodoDetail from './TodoDetail.js';

export default class List extends Component {
    state = {
        list: [],
        input: '',
        currentUser: this.props.currentUser
    }
    async componentDidMount() {
        const data = await getList(this.state.currentUser);
        this.setState( { list: data.body })
    }
    handleInput = (e) => {
        this.setState({ input: e.target.value})
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const newTodo = { task: this.state.input, complete: false}
        const returnedTodo = await insertTodo(newTodo, this.state.currentUser); 
        const newList = [...this.state.list, returnedTodo.body]
        this.setState({ list: newList})
    }
    toggleComplete = (e) => {
        const newTodos = this.state.list.slice();
        const targetId = Number(e.target.id.split('_')[1]);
        const match = newTodos.find(thisTodo => thisTodo.id === targetId)
    
        match.complete = !match.complete;
        this.setState({list: newTodos})
        toggleDBItem(match, this.state.currentUser);
    }
    render() {
        const listNode = this.state.list.map(todo => 
            <TodoDetail todo={todo} key={`listKey${todo.id}`} toggleComplete={this.toggleComplete} />
        )
        return (
            <div>
                <form>
                    <input type="text" require onChange={this.handleInput} value={this.state.input} />
                    <button onClick={this.handleSubmit} >Submit</button>
                </form>
                <ul className="list">
                    {listNode}
                </ul>
            </div>
        )
    }
}
