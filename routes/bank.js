const express = require('express');
const router = express.Router();

router.get('/bank', (req, res) => {
    
    
    res.render('bank')
})

module.exports = router;