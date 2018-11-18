import React, { Component } from "react";
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="homeBox1">
                    <Link to={'/edit'}>
                        <button className="newButton">ADD NEW WORKOUT</button>
                    </Link>
                </div >
                <div className="homeBox2">
                    <Link to={'/edit'}>
                        <button className="oldButton">SELECT OLD WORKOUT</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Home;