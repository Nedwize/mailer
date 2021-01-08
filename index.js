const express = require('express');
const app = express();
require('./services/passport');
(require('./routes/authRoutes'))(app);




const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(`Server on: http://localhost:${PORT}`);
});