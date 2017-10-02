import React, { Component } from 'react'
import logo from '../logo.svg';

class Header extends Component {
    inputChange(event) {
        console.log(event.target.value);

    }
    render() {
        return (
            <header>
                <div
                    className="logo"
                    onClick={() => { console.log('hiya') }}>Logo</div>
                <input onChange={this.inputChange} />
            </header>
        )
    }
}

export default Header