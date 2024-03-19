const { getAllrequestbloodHandler, addrequestbloodHander, deletebloodbankHandeler } = require('../requestbloodcontroller/requestbloodbank.controller')



const router = require('express').Router()
router.get('/requestbloodbank',getAllrequestbloodHandler)
router.post('/requestbloodbank',addrequestbloodHander)
router.delete('/requestbloodbank',deletebloodbankHandeler)

module.exports = router