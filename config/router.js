
const express = require('express');
const router = express.Router()
const control = require('../controllers/controller')
const {Tweet} = require('../modules/module')

router.all('/addTweet',control.request_addTweet)


router.all('/tweet/:id',control.requestByid)
router.all('/tweet/edit/:id',control.request_update)
router.all('/update_page/:id',control.request_update)

router.all('/Tweet',control.request)

module.exports = router