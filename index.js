const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '/EXPRESS_APP'});
});

app.listen(port, () => {
    console.log(`now lisssssssssstening on portttttttttt ${port}`); 
})