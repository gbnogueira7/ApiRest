import app from './src/app.js'
//para trabalhar importação e exportação temos que importar a linha "type": "module"
//no nosso package.json

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`);
});