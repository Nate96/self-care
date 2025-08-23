const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const repository = require('./src/repository')
const bodyParser = require('body-parser')

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/GetCategories', async (req, res) => {
    let categories = await repository.GetCategories()
    res.send(categories)
})

app.get('/GetQuestions', async (req, res) => {
    let questions = await repository.GetQuestions()
    res.send(questions)
})


// Forms
app.get('/form/:userId', async (req, res) => {
    let forms = await repository.GetForms(req.params.userId)
    res.send(forms)
})

app.post('/form/:userId', async (req, res) => {
    let formId = await repository.CreateForm(req.params.userId)
    res.send(formId)
})


// User Data
app.get('/userData/:userId', async(req, res) => {
    let userData = await repository.GeteUserData(req.params.userId)
    res.send(userData)
})

app.post('/userData', async(req, res) => {
    let userData = await repository.CreateUserData(req.body)
    res.send(JSON.stringify(userData))
})

// Responses
app.get('/responses/:formId', async(req, res) => {
    let assessment = await repository.GetAssessment(req.params.formId)
    res.send(JSON.stringify(assessment))
})

// Basic Anaylse
app.post('/BasicAnalyse/:formId', async(req, res)=> {
    let basicAnalyse = await repository.createBasicAnalyse(req.params.formId)
    res.send(JSON.stringify(basicAnalyse))
})

app.get('/BasicAnalyse/:userId',async(req, res) => {
    let calc = await repository.getBasicAnayse(req.params.userId)
    res.send(JSON.stringify(calc))
})