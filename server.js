var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')

var app = new (require('express'))()
var port = 8080

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + '/src/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})