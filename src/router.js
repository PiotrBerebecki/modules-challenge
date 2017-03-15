const handler = require('./handler');

const router = (req, res) => {
  const url = req.url;
  console.log('router', url);

  if (url === '/') {
    handler.serveLanding(req, res);

  } else if (url === '/fac') {
    handler.serveFac(req, res);

  } else if (url === '/dwyl') {
    handler.serveDwyl(req, res);

  } else if (url.includes('/assets')) {
    console.log('assets');
    handler.serveAssets(req, res);

  } else if (url.includes('/api/repos')) {
    handler.serveApi(req, res);

  } else {
    handler.serve404(req, res);
  }
};

module.exports = router;
