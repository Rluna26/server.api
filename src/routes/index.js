const express = require('express')
const router = express.Router()

router.use('/', require('./posts.js'))
router.use('/', require('./comments.js'))

module.exports = router