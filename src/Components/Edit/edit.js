import React, { Component } from "react";
import './edit.css';
import { Link } from 'react-router-dom';



class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            exercise: "",
            reps: "",
            weight: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    cancel() {
        this.setState({
            date: "",
            exercise: "",
            reps: "",
            weight: ""
        })
    }
    render() {
        return (

            <div className="edit">
                <div className="editBox">
                    <div>
                        <input value={this.state.date} onChange={this.handleChange} name="date" placeholder="date" />
                        <br />
                        <button>ADD EXERCISE</button>
                        <br />
                        <input value={this.state.exercise} onChange={this.handleChange}  name="exercise" placeholder="exercise" />
                        <input value={this.state.reps} onChange={this.handleChange}  name="reps" placeholder="reps" />
                        <input value={this.state.weight} onChange={this.handleChange}  name="weight" placeholder="weight" />
                        <button onClick={this.cancel}>X</button>
                    </div>
                    <br />
                    <div >
                        <Link to={'/home'}>
                            <button className="subButton">submit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Edit;