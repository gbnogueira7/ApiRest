import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://gnogueira:123@cluster0.sntefxg.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;