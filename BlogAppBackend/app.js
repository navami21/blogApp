// server.js (assuming this is your main server file)
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const postRoute = require('./routes/postRoute');
const userRoute=require('./routes/userRoute')
require('dotenv').config();
require('./db/connection');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/blogg', postRoute);
app.use('/api/user',userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});
