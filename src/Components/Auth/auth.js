import React, { Component } from "react";
import './auth.css';
import axios from 'axios';

class Auth extends Component {
    constructor(props){
        super(props)
        this.state ={
            username:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    
    }
    
    post(){
        axios.post(`api/register`,{
            username:this.state.username, 
            password:this.state.password  
         })
         .then(res=> {
             console.log(res);
             console.log(res.data);
         })
    
    }
    
    
        render(){
            return (
    <div>
        <div>
        <input value={this.state.username} onChange={this.handleChange} type="text" name="username"/>
        <input value={this.state.password} onChange={this.handleChange} type="text" name="password"/>
        <br/>
        <button>Login</button>
        <button>Register</button>
        </div>
    </div>
    
            )
        }
    }
export default Auth;
