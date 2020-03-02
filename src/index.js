import app from './app';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${HOST}:${PORT}`);
})
var http = require('http')

http.createServer((req, res) => {
    res.write('hello world, will it change?')
    res.end()
}).listen(8000)
