import express from 'express'
import products from './data/products.js' // with es modules, we need to use the .js ext to bring in files
import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('Api is out here spinnin..')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)

  res.json(product)
})

app.listen(
  PORT,
  console.log(`server running on: ${PORT}, in ${process.env.NODE_ENV} mode`)
)
