const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

const pathPublic = path.resolve(__dirname, './public');
app.use(express.static(pathPublic))

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './views/home.html'));
})


app.listen(port, () => {
	console.log(`The server is running on port: ${port}`)
})
