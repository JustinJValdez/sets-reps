import React from "react";
import {Switch, Route} from 'react-router-dom';
import auth from './src/Components/Auth/auth';
import header from './src/Components/Header/header';
import edit from './src/Components/Edit/edit';
import home from './src/Components/Home/home';



export default (
    <Switch>
        <Route path='/home' component={home}/>
        <Route path='/header' component={header}/>
        <Route path='/edit' component={edit}/>
        <Route path='/' component={auth}/>
    </Switch>
)