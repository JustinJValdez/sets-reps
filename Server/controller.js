module.exports={

    /*app.get(`api/tracker`,controller.getTracker)*/
      getTracker:(req,res,next)=>{
        const db=req.app.get('db');
      db.get_tracker().then(result=>{
        res.send(result)
      })
      },
    
    /*app.post(`api/tracker`,controller.postTracker)*/
    postTracker:(req,res,next)=>{
      const dbinstance = req.app.get('db');
      const {date,weight,exercise,set}=req.body;
      dbinstance.create_tracker([date,weight,exercise,set])
      dbinstance.get_tracker().then(result=>{
        res.send(result)
      })
    }
    
    /*app.put(`api/tracker`,controller.updateTracker)*/
    /*app.delete(`api/tracker`,controller.removeTracker)*/
    
    }