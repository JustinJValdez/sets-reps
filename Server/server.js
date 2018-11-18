const express = require('express'),
        cors=require('cors'),
        bodyparser=require('body-parser'),
        massive=require('massive'),
        axios=require('axios'),
        controller=require('./controller')
    require('dotenv').config();


const app=express();

/*massive(process.env.CONNECTION_STRING)
    .then(dbinstance => {
    app.set('db', dbinstance)
    console.log(`DB is Running`)
    }).catch( err=>console.log(err));*/


app.use(bodyparser.json());
app.use(cors());

app.get(`api/user`,controller.getUser)
app.post(`api/user`,controller.postUser)
/*app.put(`api/user`,controller.updateUser)*/
/*app.delete(`api/user`,controller.removeUser)*/

app.get(`api/tracker`,controller.getTracker)
app.post(`api/tracker`,controller.postTracker)
/*app.put(`api/tracker`,controller.updateTracker)*/
/*app.delete(`api/tracker`,controller.removeTracker)*/

const port = process.env.SERVER_PORT || 2000


app.listen(port, ()=>{
    console.log(`port up on ${port}`)
})
