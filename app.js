const express = require('express');
const app = express();

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

const mongoose = require('mongoose');
const users = require("./routes/api/users");
const trees = require("./routes/api/trees");
// const User = require("./models/User");
const bodyParser = require('body-parser');
const passport = require('passport');
const leaves = require('./routes/api/leaves');

app.get('/', (req, res) => res.send("Forest Library test"));


const db = require('./config/keys').mongoURI;


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB successfully'))
    .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(passport.initialize());
require('./config/passport')(passport);


app.use("/api/users", users);
app.use("/api/trees", trees);
app.use("/api/leaves", leaves);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));


