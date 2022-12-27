const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
require('./models');
//dotenv.config();
//require('./models');

//set views file
app.set('views',path.join(__dirname,'views'));
            
//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// include router
const courseRouter = require("./routes/courseRouter")

//User.sync({ force: true });

// routing
app.use("/course", courseRouter)

// Server Listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});

//nodemon app (OR) npm start