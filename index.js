require('dotenv').config()
const express = require('express')
const app = express()


const port = 4000

app.get('/', (req, res) => {
  res.send('muje na pta')
})
app.get('/twitter',(req,res)=> {
    res.send('harsh jhankda on twitter')
})
app.get('/login',(req,res)=> {
    res.send('<h1>please login at website<h1>')
})
app.get('/author',(req,res)=>{
    res.send('<h1> hello folks my name is HARSH JHANKDA<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})