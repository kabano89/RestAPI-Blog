const express = require('express');
const app = express();

// Setup server port
let port = process.env.PORT || 8080;

//welcome route
app.get('/', (req, res) => {

    res.json({
        message: 'Welcome to my blog rest api'
    });

});

app.listen(port, function(){
    console.log("Running blogRestApi on port " + port);
});