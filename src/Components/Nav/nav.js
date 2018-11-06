import React from "react";
import './Nav.css';
import {Link} from "react-router-dom";

function Nav(props){
    return(

        /*if statement for this.props.location.pathname */
        <div>
            <Link to={'/home'}>
           <button>HOME</button>
           </Link>
           <Link to={'/edit'}>
           <button>EDIT</button>
           <button>ADD</button>
           </Link>
           <Link to={'/'}>
           <button>LOGOUT</button>
           </Link>
        </div>
    )
}


export default Nav;