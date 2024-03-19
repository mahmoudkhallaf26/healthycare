const validaterequest = require('../../../common/validaterequest')
const { getAllhosbitalHandler, addhosbitalHander, signinHosbitalhandeler,
     updateHospitalHandler, getpostsbyname, gethosbitalbyname } = require('../hosbitalcontroller/hosbital.controller')

const router = require('express').Router()

router.get('/hosbital',getAllhosbitalHandler)
router.post('/hosbital',addhosbitalHander)
router.post('/login',signinHosbitalhandeler)
router.put('/hosbital/:hospitalname?',updateHospitalHandler)
router.get('/hosbitalreq/:hospitalname?',getpostsbyname)
router.get('/hosbital/:hospitalname?',gethosbitalbyname)


module.exports = router