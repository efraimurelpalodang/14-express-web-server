const fs   = require("node:fs")
const http = require("node:http");
const path = require("node:path");
const port = 3000;

// untuk membaca file html
const renderHTML = (halaman, res) => {
  fs.readFile(halaman, (err,data) => {
    if(err) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};


const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'content-type' : 'text/html'
  })

  const url = req.url;

  switch(url) {
    case '/about':
      renderHTML('./about.html', res);
      break;
    case '/contact':
      renderHTML('./contact.html', res);
      break;
    default:
      renderHTML('./index.html', res);
      break;
  }

});

// menjalankan server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
})