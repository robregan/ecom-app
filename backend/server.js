import express from 'express'

import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js' // with es modules, we need to use the .js ext to bring in files
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('Api is out here spinnin..')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `server running on: ${PORT}, in ${process.env.NODE_ENV} mode. lets gooooooooo`
      .yellow.bold
  )
)
