const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());

app.get('/loaderio-df02aed056656fe5e391ecf42e5bce06', (req, res) => {
  res.send('loaderio-df02aed056656fe5e391ecf42e5bce06');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})