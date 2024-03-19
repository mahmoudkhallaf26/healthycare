const { getAllnewsHandler, addnewsHander } = require('./controller')

const router = require('express').Router()

router.get('/news',getAllnewsHandler)
router.post('/news',addnewsHander)

module.exports = router