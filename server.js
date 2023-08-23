const http = require('http');
const port = 3000;

const rotas = {
    '/': "essa é a página inicial",
    '/livros': 'esses são os livros',
    '/autores': 'esses são os autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`);
});