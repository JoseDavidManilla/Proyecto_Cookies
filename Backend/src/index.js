const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use('/cookies', require('./controllers/cookies.controller'));

//server listens to port 4 000
app.listen(4000, (err) => {
    if (err)
        throw err;
    console.log('listening on port 4000');
});