const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 4005

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '25537b8ed89c41aabe96bc1329a9d45b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

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


