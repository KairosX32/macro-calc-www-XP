const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');
const public = path.join(__dirname, '../public');

// static dir
app.use(express.static(public));


app.get('/', (req, res, next) => {
    res.render('index');
})



app.listen(port, _ => console.log(`Server is running on port ${port}`))