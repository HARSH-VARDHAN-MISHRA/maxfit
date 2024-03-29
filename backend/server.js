const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const {connectDb} = require('./database/db');

// All Routes 
const createCategory = require('./routes/categoryRoutes')

dotenv.config()
connectDb()

const app = express();
const port = process.env.PORT;

// app.new((req,res,))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/",createCategory)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Maxfit app listening on port ${port}`)
})