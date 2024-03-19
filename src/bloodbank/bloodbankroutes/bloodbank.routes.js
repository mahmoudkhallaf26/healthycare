const { getAllbloodbankHandler, addblodbankHander, getpostsbyname, signinbloodbankhandeler, updatebloodbank } = require('../bloodbankcontrollers/bloodbank.controller')

const router = require('express').Router()


router.post('/bloodbank',addblodbankHander)
router.get('/bloodbank',getAllbloodbankHandler)
router.get('/bloodbankreq/:bloodbankname?',getpostsbyname)
router.post('/loginbloodbank',signinbloodbankhandeler)
router.put('/bloodbank/:bloodbankname?',updatebloodbank)
module.exports = router