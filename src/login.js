import React, { Component } from 'react'
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:"",
            password:"",
        }
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axios.post("https://webapi.superkul.id/v1/login",this.state, {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }})
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                console.log(error.response.message)
        })
        this.setState({
            email:"",
            password:""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}