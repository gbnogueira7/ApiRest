import express from 'express';
import db from './config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once("open", () =>{
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

const livros =[
    {id: 1, "titulo": "Senhor dos anéis"},
    {id: 2, "titulo": "O hobbit"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
});

app.get('/livros',(req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

function buscaLivro(id){
return livros.findIndex(livro => livro.id == id)
//FindIndex, método para manipular array, que acha, através de um
//parâmetro a posição onde está o elemento que você deseja alterar
}

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id); 
    livros.splice(index, 1);
    //Posição de início, e qual posição queremos excluir
    res.send(`O livro ${id} foi deletado com sucesso`);
})

export default app