module.exports={
  
  getUser:(req,res,next)=>{
    const db=req.app.get('db');
  db.get_user().then(result=>{
    res.send(result)
  })
  },

postUser:(req,res,next)=>{
  const dbinstance = req.app.get('db');
  const {username,password}=req.body;
  dbinstance.create_user([username,password])
  dbinstance.get_user().then(result=>{
    res.send(result)
  })
},

/*app.put(`api/user`,controller.updateUser)*/
/*app.delete(`api/user`,controller.removeUser)*/

   getTracker:(req,res,next)=>{
        const db=req.app.get('db');
      db.get_tracker().then(result=>{
        res.send(result)
      })
      },
    
    postTracker:(req,res,next)=>{
      const dbinstance = req.app.get('db');
      const {date,weight,exercise,reps}=req.body;
      dbinstance.create_tracker([date,weight,exercise,reps])
      dbinstance.get_tracker().then(result=>{
        res.send(result)
      })
    }
    
    /*app.put(`api/tracker`,controller.updateTracker)*/
    /*app.delete(`api/tracker`,controller.removeTracker)*/
    
    }
  
 