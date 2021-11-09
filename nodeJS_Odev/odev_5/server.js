const http = require('http');
const log = require('./log.js')

http.createServer(function (request, response) {
    console.log(request.url)
    if (request.url == '/index') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<html><body><h1> Anasayfaya Hoşgeldiniz</h1></body></html>')
    } else if (request.url == '/aboutus') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<html><body><h2> Hakkımızda Sayfasına Hoşgeldiniz </h2></body></html>')
    } else if (request.url == '/contact') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<html><body><h2> İletişim Sayfasına Hoşgeldiniz </h2></body></html>')
    }
    
    response.end()
}).listen(5000)

log.information('Server is running...')


