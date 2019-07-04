const express = require('express')
const router = express.Router()
router.get('/comentarios/:postid', (rec, res) =>{
    res.json({

        conteudo: 'Comentarios',
        autor: 'Rodrigo Luna'
    })
})
module.exports = router