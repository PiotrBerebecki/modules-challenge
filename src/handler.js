const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');

const handler = {};


handler.serveLanding = (req, res) => {
  fs.readFile(path.join(__dirname, 'fac.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  });
};

handler.serveFac =  (req, res) => {

  fs.readFile(path.join(__dirname, 'fac.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  });

};

handler.serveDwyl =  (req, res) => {

  fs.readFile(path.join(__dirname, 'dwyl.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  });

};

handler.serveAssets =  (req, res) => {
  fs.readFile(path.join(__dirname, 'stylesheet.css'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/css'});
      res.end(file);
    }
  });
};

handler.serveApi = (req, res) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(repos.fac));
};

handler.serve404 = (req, res) => {
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('404 server error');
};


module.exports = handler;
