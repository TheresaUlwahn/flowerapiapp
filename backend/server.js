import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import flowersData from './data/flowersData.json'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowerApiApp"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Flower = mongoose.model('Flower', {
  detail: {
    oid: String,
    blooming_season: String,
    common_name: String,
    latin_name: String,
    notes: String,
    sun: Boolean
  }
})

const Message = mongoose.model('Message', {
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140
  },
  hearts: {
    type: Number,
    default: 0
    // require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

//adding the flowers to the database
const addFlowersToDatabase = () => {
  flowersData.forEach((flower) => {
    new Flower(flower).save()
  })
  addFlowersToDatabase()
}


//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', async (req, res) => {
  res.send('Hello flowers')
  const messages = await Message.find().sort({createdAt: 'desc'}).limit(20).exec()
  res.json(messages)
})

//http://localhost:8080/flowers
app.get('/flowers', async (req, res) => {
  const flowers = await Flower.find()
  console.log(flowers)
  // res.json(flowers)
  res.json(flowersData)
} )
// console.log(flowersData)

//http://localhost:8080/flowers/:id
app.get('/flowers/:id', (req, res) => {
  const showId = req.params.id 
  console.log(showId)
  const show = flowersData.find(item => +item._id === +showId)
  console.log("id path parameter")
  res.json(show)
  // res.json(showId)
})

app.post('/', async (req, res) => {
  //Retrieve the information sent by the client to our API endpoint
  const {message, hearts} = req.body

  // Use our mongoose model to create the database entry
  const greating = new Greating({message, hearts})

  try {
    // Success
    const savedGreating = await greating.save()
    res.status(201).json(savedGreating)
  }catch (err) {
    res.status(400).json({message: 'Could not save your sweet message', error: err.errors}) 
  }
}) 

// The endpoint updates the number of likePOST /:thoughtId/like
app.post('/:messageId/like', async (req, res) => {
  
  try {
    const like = await Message.findOneAndUpdate(
      { "_id": req.params.messageID }, //filter
      { $inc: { "hearts": 1 } },//update
      { returnNewDocument: true } //doesn't update/work 
    )
    res.status(201).json(like)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Ups, I could not save your sweet like', error: err })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
