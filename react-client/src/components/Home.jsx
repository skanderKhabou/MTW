import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="back">
                <div id="logoLeft">M-T-W</div>
                <div className="register">

                    <h1> Movies To Watch </h1>
                    <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                    <input className="email" type="email" name="email" /><br></br>
                    <button className="btn">Register</button>
                </div>
            </div>
        )
    }
}
