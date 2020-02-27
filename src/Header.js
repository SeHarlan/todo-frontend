import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const name = (this.props.email) ? `${this.props.email}'s ` : '';
        return (
            <div>
                <h1>{name}To Do!</h1>
            </div>
        )
    }
}
