import React, { Component } from 'react'
import logo from '../logo.svg';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            keywords: ''
        }
    }
    inputChange(e) {
        this.setState({ keywords: e.target.value })
        this.props.newsSearch(e.target.value)
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <img alt="logo" width={120} src={logo} />
                </div>
                <input onChange={this.inputChange.bind(this)} />

                <div> {this.state.title}</div>
                <div> {this.state.keywords}</div>
            </header>
        )
    }
}

export default Header