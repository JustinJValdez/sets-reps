import React, { Component } from "react";
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <div className="header">
                <div className="divOne">
                    <Link to={'/'}>
                        <button className="logout">LOGOUT</button>
                    </Link>
                </div>
                <div className="divTwo"> SETS & REPS</div>
            </div>
        )
    }

}

export default Header;