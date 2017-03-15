

const router = (req, res) => {
  this.url = req.url;


  if (url === '/') {
    handler.serveLanding(req, res);
  } else if (url === '/fac') {
    handler.serveFac(req, res);
  } else if (url === '/dwyl') {
    handler.serveDwyl(req, res);
  } else if (url === '/css/stylesheet.css') {
    handler.serveAssets(req, res);
  } else if (url === '/api/repos/fac') {

  } else {
    handler.serve404(req, res);
  }
};

module.exports = router;
