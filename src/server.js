const http = require('http');
const router = require('./router');

const server = http.createServer(router);

module.exports = server;
