const mongoose = require('mongoose')

const  { Schema, model, Types } =  mongoose;

const clientsSchema = Schema({ 
  id: {
    type:Types.ObjectId,
    required:false
  },
  name: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  providers:[
    {
      _id:{
        type:Types.ObjectId,
        required:true
      },
      name:{
        type:String
      }
    }
  ]
 });

 module.exports = model('Clients', clientsSchema);
