
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // for Heroku

app.use(express.static(publicPath));

// called when someone tries to do a get request to our server
// req contains info about the request
// res lets you manipulate the response your express server makes...
// ...to whoever made the request
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => { // accessible through localhost/3000
   console.log('express server up');
})