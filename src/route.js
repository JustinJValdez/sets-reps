import React from "react";
import {Switch, Route} from 'react-router-dom';
import auth from './Components/Auth/auth';
import header from './Components/Header/header';
import edit from './Components/Edit/edit';
import home from './Components/Home/home';
import old from './Components/Old/old';


export default (
    <Switch>
        <Route path='/home' component={home}/>
        <Route path='/header' component={header}/>
        <Route path='/edit' component={edit}/>
        <Route path='/old' component={old}/>
        <Route path='/' component={auth}/>
    </Switch>
)