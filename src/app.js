import express from 'express';

const app = express();

const livros =[
    {id: 1, "título": "Senhor dos anéis"},
    {id: 2, "título": "O hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
});

app.get('/',(req, res) => {
    res.status(200).json(livros)
})

export default app