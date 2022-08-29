function handleGetRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};
   
    if (pathname === '/projects') {
      data = await getProjects();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(data));
    }
   
    res.statusCode = 404;
    return res.end('Requested resource does not exist');
   
  }