const express = require('express'); // Mengambil module express framework
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
// app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// DB Connection 
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex: true,useUnifiedTopology:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDb database connection established succesfully");
});


// Router

const exercise = require('./router/exercise');
const users = require('./router/users');

app.use('/exercise', exercise);
app.use('/users', users);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});