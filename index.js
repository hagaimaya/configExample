const express = require('express');
const app = express();
const port = 3000;

const path = require('path')

app.use(express.static('public'))

app.get('/config/config.js', (req, res) => {
	  const config = {
		  url: process.env.url,
		  anotherConfig: process.env.anotherConfig
		    };
	  res.send("const config = " + JSON.stringify(config));
})


app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
})
