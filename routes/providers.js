const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db_utils/index')

router.get('/',async function (req, res) {
    const { db } = await connectToDatabase()
    const data = await  db.collection("providers").find({}).toArray();
    res.json( [...data ]);
  })
  
  module.exports = router;