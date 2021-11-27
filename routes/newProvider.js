const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db_utils/index')
const Provider =  require('../db_utils/models/provider')


router.post('/',async function (req, res) {
    const newProvider = new Provider({
        name:req.body.name,
    })
    const { db } = await connectToDatabase()
    await  db.collection("providers").insertOne(newProvider, (err, data) => {
      if (err) {
        console.log('Could not create the provider')
        throw err
      }
      res.json({...data,messsage:'Provider is created succesfully'})
    });
  })
  
module.exports = router;