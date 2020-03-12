import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import flowersData from './data/flowersData.json'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowerApiApp"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Flower = mongoose.model('Flower', {
  oid: String,
  blooming_season: String,
  common_name: String,
  latin_name: String,
  notes: String,
  sun: Boolean
})

//adding the flowers to the database
const addFlowersToDatabase = () => {
  flowersData.forEach((flower) => {
    new Flower(flower).save()
  })
 addFlowersToDatabase()
}


// if (process.env.RESET_DATABASE) {
//   console.log('Resetting database!')

//   const seedDatabase = async () => {
//     await Flower.deleteMany({})

//     flowersData.forEach(async (flowersData) => {
//       const flower = await new Flower(flowersData).save()
//       // new Box({ ...flowersData, flower }).save()
//     })
//   }

//   seedDatabase()
// }

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', async (req, res) => {
  res.send('Hello world')
})

//http://localhost:8080/flowers
app.get('/flowers', async (req, res) => {
  const flowers = await Flower.find()
  console.log(flowers)
  res.json(flowers)
} )


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
