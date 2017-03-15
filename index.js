const { server } = require('./src/server');

// console.log(server);
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

server.listen(port, function() {
  console.log('server running on: http://' + host + ':' + port);
});
