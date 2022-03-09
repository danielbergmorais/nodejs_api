import {createTable, createUser, readUser, updateUser, deleteUser, listUsers} from "./Controller/User.js"

import express from "express"

const app = express()
const port = 3000

app.use(express.json())
createTable()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is running in port ${port}`)
})

/** User Endpoints **/

//CREATE
app.post('/user', (req, res) => {
  createUser(req.body)
  res.json({
    "statusCode": 200
  })
})

//READ
app.get('/user', async (req, res) => {
  let user = await readUser(req.body.id)
  res.json(user)
})

//UPDATE
app.put('/user', (req, res) => {
  updateUser(req.body)
  res.json({
    "statusCode": 200
  })
})

//DELETE
app.delete('/user', async (req, res) => {
  let user = await deleteUser(req.body.id)
  res.json(user)
})

//LIST
app.get('/users', async (req, res) => {
  let users = await listUsers()
  res.json(users)
})
