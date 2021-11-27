const mongoose = require('mongoose')

const  { Schema, model, Types } =  mongoose;

const providerSchema = new Schema({ 
  id: Types.ObjectId,
  name: String
 });
module.exports= model('Provider', providerSchema);