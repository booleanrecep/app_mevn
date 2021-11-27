const { ObjectId } = require('bson');
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db_utils/index')
const Clients =  require('../db_utils/models/clients')


router.put('/',async function (req, res) {
    
    const { db } = await connectToDatabase()
    await  db.collection("clients").updateOne({_id:ObjectId(req.body._id)},{ $set:{...req.body.data}},{upsert: true}, (err, data)=> {
      if (err) {
        console.log('Could not update the client')
        throw err
      }
      res.json({...data,messsage:'Client is updated succesfully'})
    })
  })
  
module.exports = router;