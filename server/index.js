import Express from 'express'
import Mongoose from 'mongoose'
import path from 'path'
import config from '@config'
import v1Router from '@routes'
import webpackConfig from '../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webapackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'

Mongoose.connect(config.databaseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = Express()

const compiler = webpack(webpackConfig)

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath
  })
)
app.use(webapackHotMiddleware(compiler))

app.use(v1Router)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(config.serverPort, () => {
  console.log(
    `Server successfully started, listening on port ${config.serverPort}`
  )
})
