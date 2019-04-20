const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    
    res.json({ 
        status: 'Funciona el API :D'    
    });
});
module.exports = router;
