const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({bye: "Buddy we changed it"});
})

const PORT = process.env.PORT || 8000;
app.listen(PORT);