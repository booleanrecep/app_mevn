const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db_utils/index')
const { ObjectId } = require('bson');


router.delete('/',async function (req, res) {
    const { db } = await connectToDatabase()
    await  db.collection("clients").deleteOne({"_id":ObjectId(req.body._id)},(err, data) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.json({...data,messsage:'Client is deleted succesfully'})
    });
  })
  
module.exports = router;