const express = require('express');
const connectToDatabase = require('../db_utils/index')
const router = express.Router();

router.get('/',async function (req, res) {
    const { db } = await connectToDatabase()
    const data = await  db.collection("clients").find({}).toArray();
    res.json([...data ]);
  })
  
module.exports = router;