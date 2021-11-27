const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config()

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const editClient = require("./routes/editClient")
const newClient = require("./routes/newClient")
const newProvider = require("./routes/newProvider")
const deleteClient = require("./routes/deleteClient")
const deleteProvider = require("./routes/deleteProvider")
const clients = require("./routes/clients")
const providers = require("./routes/providers")

app.use('/',express.static('./build'))
app.use('/api/newClient',newClient)
app.use('/api/newProvider',newProvider)
app.use('/api/editClient',editClient)
app.use('/api/deleteClient',deleteClient)
app.use('/api/deleteProvider',deleteProvider)
app.use('/api/clients',clients)
app.use('/api/providers',providers)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});