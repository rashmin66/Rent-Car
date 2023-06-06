const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
app.use(cors());
app.use(bodyParser.json());
app.post('/gethelloworld', (req , res) => {
  res.send('Hello World!')
  console.log(req.body);

})

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)
})