const routes = require('express').Router()
const { getUsers, getStock } = require('../apis')

routes.get('/getUsers', async (req, res) => {
  try {
    const users = await getUsers(req.query.requestedUsers)
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
})

routes.get('/getStock', async (req, res) => {
  try {
    const stock = await getStock(req.query.requestedStock)
    res.status(200).send(stock)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = routes
