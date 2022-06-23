const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 4005

//middleware same thing as endpoint, you dont need both
app.use(express.static(path.join(__dirname, '../public')))
//endpoints
app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/styles',function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.css'));
  });
  app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })


