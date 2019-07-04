const express = require('express')
const router = express.Router()
const knex = require('knex')
const dataDb = require('../data.db/data')

router.get('/postagens', (rec, res) =>{
    let result = dataDb.TblPosts()
    res.json(result)
})


module.exports = router