const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./Models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
        authSource: 'admin',
        useNewUrlParser: true ,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to DB Servers");
    });

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

(require('./routes/authRoutes'))(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(`Server on: http://localhost:${PORT}`);
});