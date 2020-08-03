const express = require('express')
const superheroes = require('superheroes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req, res) => {
    const nama = req.query.nama
    const alamat = req.query.alamat
    if (nama == undefined || alamat == undefined){
        res.send('data yang diisi kurang lengkap')
        return
    }
    res.send('My name is ' + nama + ', from ' + alamat)
  })

app.get('/superheroes', (req, res) => {
    const randSuperheroes = superheroes.random()
    res.send('Your superhero is ' + randSuperheroes)
})  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})