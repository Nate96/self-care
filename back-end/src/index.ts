// src/server.ts
import express from 'express'
import dotenv from 'dotenv'
import Database from 'better-sqlite3'


dotenv.config()
const app = express()

const port = process.env.PORT3
const db = new Database('test.db')

interface User {
  id: number;
  name: string;
  email: string;
}

app.get('/', (req, res) => {
   const selectStmt = db.prepare('SELECT * FROM users');
   const users = selectStmt.all() as User[];
   console.log("SEND")

   res.send(users);
});

app.listen(port, () => {
   const create = db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    );
  `);
   create.run()
   console.log("CREATE TABLE")

   const insertStmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
   const info = insertStmt.run("test name", "test email@yourmom.com");
   console.log("INSERT")

   console.log(`Server is running on http://localhost:${process.env.PORT}`);
});



//const cors = require('cors')
//const app = express()
//const port = process.env.PORT
//const repository = require('./src/repository')
//const bodyParser = require('body-parser')
//
//app.use(cors({
//    origin: process.env.CORS_ORIGIN
//}))
//
//app.use(bodyParser.json())
//
//app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`)
//})
//
//
//app.get('/GetCategories', async (req, res) => {
//    let categories = await repository.GetCategories()
//    res.send(categories)
//})
//
//app.get('/GetQuestions', async (req, res) => {
//    let questions = await repository.GetQuestions()
//    res.send(questions)
//})
//
//
//// Forms
//app.get('/form/:userId', async (req, res) => {
//    let forms = await repository.GetForms(req.params.userId)
//    res.send(forms)
//})
//
//app.post('/form/:userId', async (req, res) => {
//    let formId = await repository.CreateForm(req.params.userId)
//    res.send(formId)
//})
//
//
//// User Data
//app.get('/userData/:userId', async(req, res) => {
//    let userData = await repository.GeteUserData(req.params.userId)
//    res.send(userData)
//})
//
//app.post('/userData', async(req, res) => {
//    let userData = await repository.CreateUserData(req.body)
//    res.send(JSON.stringify(userData))
//})
//
//// Responses
//app.get('/responses/:formId', async(req, res) => {
//    let assessment = await repository.GetAssessment(req.params.formId)
//    res.send(JSON.stringify(assessment))
//})
//
//// Basic Anaylse
//app.post('/BasicAnalyse/:formId', async(req, res)=> {
//    let basicAnalyse = await repository.createBasicAnalyse(req.params.formId)
//    res.send(JSON.stringify(basicAnalyse))
//})
//
//app.get('/BasicAnalyse/:userId',async(req, res) => {
//    let calc = await repository.getBasicAnayse(req.params.userId)
//    res.send(JSON.stringify(calc))
//})
