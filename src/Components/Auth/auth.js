import React, { Component } from "react";
import './auth.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.post =this.post.bind(this)
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    post() {
        axios.post(`api/register`, {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }


    render() {
        return (
            <div className="auth">
                <div className="authBox">
                    <div className="authButtons">
                        <input className="userBox1" value={this.state.username} onChange={this.handleChange} name="username" placeholder="USERNAME" />
                        <br/>
                        <input className="userBox2" value={this.state.password} onChange={this.handleChange} name="password" placeholder="PASSWORD" />
                        <br />
                        <div >
                            <Link to={'/home'}>
                                <button onClick={this.post} className="login">Login</button>
                                <br/>
                                <button className="register">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Auth;
