const config = require("./webpack.config.js");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const port = process.argv[2] ? process.argv[2] - 0 : 3000;
config.entry.app.unshift(
  "webpack-dev-server/client?http://localhost:" + port + "/",
  "webpack/hot/dev-server"
);

const compiler = webpack(config);
new WebpackDevServer(compiler, {
  hot: true,
  contentBase: "dist",
  publicPath: config.output.publicPath,
  historyApiFallback: true
}).listen(port, () => {
  console.log('Listening at http://0.0.0.0:' + port);
});
