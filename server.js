const express = require('express');
const app = express();

const PORT = 3000;

app.listen(process.env.PORT || 5000, function() {
    console.log('SERVER ON SERVER ON SERVER ON SERVER ON');
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

