const express = require('express')
const app = express()
const port = 3000

//! root slash(/) adalah root dari website kita
//! rout adalah halaman utama aplikasinya

app.get('/', (req, res) => {
  // res.json({
  //   nama: "Efraim urel palodang",
  //   email: "Kepoyaa@gmail.com",
  //   noHP: "1234567890"
  // })
  res.sendFile('./index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname})
  // res.send('Ini Adalah Halaman About!')
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname})
  // res.send('Ini Adalah Halaman Contact!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/product/:id', (req,res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use('/', (req,res) => {
  res.status(404);
  res.send('<h1>404</h1>')
});




// const fs   = require("node:fs")
// const http = require("node:http");
// const path = require("node:path");
// const port = 3000;

// // untuk membaca file html
// const renderHTML = (halaman, res) => {
//   fs.readFile(halaman, (err,data) => {
//     if(err) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };


// const server = http.createServer((req, res) => {

//   res.writeHead(200, {
//     'content-type' : 'text/html'
//   })

//   const url = req.url;

//   switch(url) {
//     case '/about':
//       renderHTML('./about.html', res);
//       break;
//     case '/contact':
//       renderHTML('./contact.html', res);
//       break;
//     default:
//       renderHTML('./index.html', res);
//       break;
//   }

// });

// // menjalankan server
// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}..`);
// })