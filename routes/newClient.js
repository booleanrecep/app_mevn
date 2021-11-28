const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db_utils/index')
const Client =  require('../db_utils/models/client')

router.post('/',async function (req, res) {
    const newClient = new Client({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        providers:req.body.providers
    })
    const { db } = await connectToDatabase()
    await  db.collection("clients").insertOne(newClient, (err, data) => {
      if (err) {
        console.log('Could not create the client')
        throw err
      }
      res.json({...data,messsage:'Client is created succesfully'})
    });
  })
  
module.exports = router;