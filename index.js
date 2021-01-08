const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');
(require('./routes/authRoutes'))(app);

mongoose.connect(keys.mongoURI, {
        authSource: 'admin',
        useNewUrlParser: true ,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to DB Servers");
    });




const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(`Server on: http://localhost:${PORT}`);
});