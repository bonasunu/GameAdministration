const Router = require('express-promise-router')
const router = new Router()
const controller = require('../controllers/apiController')
const restrict = require('../utils/restrict')

router.get('/players', restrict, controller.getAllPlayers)
router.get('/rooms', restrict, controller.getAllRooms)

module.exports = router
